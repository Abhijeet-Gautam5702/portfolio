---
title: "The Terminal Has Two Personalities"
highlight: "Two Personalities"
description: "What building a shell in Rust reveals about raw input, cooked terminals, and the responsibility of restoring shared terminal state."
publishedAt: 2026-08-27
tags:
  - Rust
  - Shells
  - Terminals
  - Unix
  - RAII
draft: false
featured: true
category: "Systems"
cover: "./cover.png"
coverAlt: "A hand-drawn terminal head split between calm cooked-mode input and chaotic raw-mode key events"
---

A terminal has split personalities -- it can function in a **raw** or a **cooked (canonical)** mode at a time. The cooked mode is what users experience most of the time, whereas the raw mode is where the real magic happens. These however, are not two different input APIs, but configurations of the same terminal.

I tried to understand this difference by building a working Unix-like shell myself, from scratch in Rust. Continuing the legacy of shells like _bash, zsh, and fish_, I chose to name my shell - **[Wish](https://github.com/Abhijeet-Gautam5702/wish)**.

## The cooked mode
In the cooked (or canonical) mode, the terminal takes care of a lot of things itself. It:
- buffers the user input intil a new line (Enter/Return key-press)
- echoes the typed user input
- lets the user perform basic editing
- handles control characters before they reach the shell as ordinary input. For example, `Ctrl+C` asks the terminal driver to send `SIGINT` to the foreground process group, while `Ctrl+D` marks the end of input. The shell then decides how to respond.

Basically, a lot of pre-processing happens on the keystrokes entered by the user, before they even reach the shell program working beneath the terminal. This makes the cooked mode suitable for executing commands and other programs.

## The raw mode
Before the command execution even starts, the shell has to decide what actions to perform based on what keys are pressed. Terminal's raw mode allows the key stroke bytes to reach the shell directly, without any pre-processing, so the shell can decide the parsing and the further actions to be performed. This helps the shell programmer map different keystroke combinations to actions. For instance, in Wish, I decided the `Esc` key would exit the shell.

### How Wish makes use of raw mode?
Like any shell, Wish also utilises the terminal's raw mode to interpret key press events on its own and map actions to each event. Here is a simplified excerpt from the Wish's source code (using `crossterm` crate) that demonstrates the raw key bytes as decides what action to take.
```rust
fn run_shell() -> Result<(), io::Error> {
    loop {
        // Raw mode makes each key press available to Wish immediately.
        let _raw_mode = TerminalRawMode::enter()?;

        // Build the prompt and initialise the input buffer and cursor.
        // ...

        loop {
            match read()? {
                Event::Key(KeyEvent {
                    code: KeyCode::Enter,
                    ..
                }) => {
                    // Submit the current input for execution, then show a new prompt.
                    // ...
                    break;
                }
                Event::Key(KeyEvent {
                    code: KeyCode::Esc,
                    ..
                }) => return Ok(()),
                Event::Key(KeyEvent {
                    code: KeyCode::Char(ch),
                    modifiers,
                    ..
                }) => {
                    if modifiers.contains(KeyModifiers::CONTROL) {
                        // Ctrl-C cancels the current input.
                        // Ctrl-D exits when the input buffer is empty.
                    } else if !ch.is_control() {
                        input_line.insert(cursor_pos, ch);
                        cursor_pos += 1;
                        redraw(&prompt, &input_line, cursor_pos)?;
                    }
                }
                _ => { /* Ignore mouse events and unsupported keys. */ }
            }
        }
    }
}
```

### Raw mode also makes Wish responsible for the screen
In cooked mode, the terminal normally echoes what the user types and removes characters when Backspace is pressed. Raw mode gives that responsibility to Wish. Updating `input_line` is not enough; the shell must also update what the user sees.

Wish does this by redrawing the current prompt (using `crossterm`) after every visible change:

```rust
fn redraw(
    prompt: &str,
    input_line: &str,
    cursor_pos: usize,
) -> Result<(), io::Error> {
    let mut stdout = stdout();

    execute!(
        stdout,
        cursor::MoveToColumn(0),
        Clear(terminal::ClearType::UntilNewLine)
    )?;

    write!(stdout, "{}{}", prompt, input_line)?;
    stdout.flush()?;

    let cursor_column = prompt.len() + cursor_pos;
    execute!(stdout, cursor::MoveToColumn(cursor_column as u16))?;

    Ok(())
}
```

The function moves to the start of the row, clears the old text, and prints the prompt with the latest input. Clearing first is important when the new line is shorter, for example after Backspace, because otherwise characters from the previous version would remain visible. Finally, Wish moves the cursor back to the correct editing position.

The `TerminalRawMode` guard belongs to one prompt's input-editing phase, not the entire shell process. Wish creates a new guard when it starts reading a command and drops it when raw mode is no longer needed. I will come to it a little later in the blog.

## Running user commands requires cooked mode
Like many other shells, Wish uses raw mode only while reading and editing a command. Before it runs that command, it returns the terminal to cooked mode so the program starts with the normal terminal behaviour it expects.

If Wish left the terminal in raw mode, typed characters might not appear on the screen, Enter and Backspace might not behave normally (because Wish handles them separately). The command could appear broken or unresponsive even though it is running correctly.

Wish prevents this by dropping its raw-mode guard (`drop(_raw_mode)`) before executing the command. This restores cooked mode first.

```rust
fn run_shell() -> Result<(), io::Error> {
    loop {
        let _raw_mode = TerminalRawMode::enter()?;

        // Draw the prompt and read key events while the terminal is raw.
        // ...

        match read()? {
            Event::Key(KeyEvent {
                code: KeyCode::Enter,
                ..
            }) => {
                // restores cooked mode before execution.
                drop(_raw_mode);

                execute_command(&mut input_line, &mut shell_exit_status)?;
            }
            // Handle the other key mappings while still in raw mode.
            // ...
        }
    }
}

fn execute_command(/* ... */) -> Result<bool, io::Error> {
    // Parse pipeline stages, configure their stdin/stdout, and handle builtins.
    // ...

    let child_process = Command::new(command)
        .args(arguments)
        .stdin(stdin)
        .stdout(stdout)
        .spawn();

    // Retain and wait for the spawned child processes.
    // ...
}
```

## Safeguarding shell program panics and sudden shutdowns
Raw mode changes the state of the terminal itself. If Wish stops without undoing that change, the next program may inherit a terminal with no input echo and unusual key behaviour. Calling `disable_raw_mode()` manually on every possible exit path would be easy to forget.

Wish handles this with a small guard:

```rust
struct TerminalRawMode;

impl TerminalRawMode {
    fn enter() -> Result<Self, io::Error> {
        terminal::enable_raw_mode()?;
        Ok(Self)
    }
}

impl Drop for TerminalRawMode {
    fn drop(&mut self) {
        // Best-effort cleanup: return the terminal to cooked mode.
        let _ = terminal::disable_raw_mode();
    }
}
```

The guard exists for as long as raw mode is active. When it leaves scope, Rust automatically calls its `Drop` implementation. This happens on a normal return, when an error is propagated with `?`, and when a panic unwinds the stack. As a result, the exit paths restore the terminal without each one needing separate cleanup code.

> This cannot protect against every shutdown. A forced kill such as `SIGKILL`, a process abort, or a machine losing power gives the program no chance to run `Drop`. In those cases, the terminal may still need to be repaired manually with a command such as `reset`.

## Raw mode gives control, and responsibility
Building Wish made raw and cooked mode are like two parts of the same conversation. Cooked mode gives programs familiar input behaviour. Raw mode gives the shell direct control over every key press. A useful shell needs to move between both at the right time.

The deeper lesson is that terminal mode is shared state. Once a program changes it, that program is responsible for restoring it before another command takes over or the program exits. Rust's `Drop` mechanism makes that responsibility much harder to forget, and leaves the user's terminal behaving as expected.

You can explore the complete [Wish source code](https://github.com/Abhijeet-Gautam5702/wish), try it yourself, share feedback, or extend it with ideas of your own.
