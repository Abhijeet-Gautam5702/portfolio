---
title: "Metadata vs. I/O: Why Moving Files is (Mostly) a Ledger Update"
highlight: "a Ledger Update"
description: "How forg achieves 11GB/s logical throughput by staying metadata-bound"
publishedAt: 2026-05-03
updatedAt: 2026-08-26
tags:
  - Rust
  - CLI
  - Filesystems
  - Performance
  - APFS
draft: false
featured: true
category: "Systems"
cover: "./cover.png"
coverAlt: "Metadata vs I/O article cover about how Rust file organisers use metadata operations for speed"
---

Most developers assume that moving huge volumes of files is a _heavy_ operation. We’ve all seen the progress bars crawling along as the OS calculates the time remaining, and assumed that the speed is limited by the write speeds of our SSDs.

But `forg` is a high-performance file-organising CLI tool that challenges this assumption. In our benchmarks, `forg` moved 20,000 files totalling 22.27 GB in just 2.02 seconds.

That is a _"logical throughput"_ of 11.27 GB/s, far exceeding the physical sequential write speed of almost any consumer drive on the market.

How? The answer lies in understanding that moving a file is rarely about the file itself. Let's understand a little about how `forg` utilises this concept.

## First of all, what is `forg`?

`forg` is a regex-based CLI tool designed to solve the "messy Downloads folder" problem. Written in Rust, it leverages low-level system calls with zero-cost abstractions, ensuring negligible overhead to the OS's native speed.

It uses regex patterns to scan directories and instantly sort files into categorised folders (e.g., .png to Pictures, .mp4 to Videos). Moreover, you can customise all the regex patterns and the destination folders tailored to your workflow.

While the automation is convenient, its speed is what surprises users most.

## How fast does `forg` perform with different volumes of data?

Here is how it performs on a standard macOS environment with an APFS (Apple File System):

| Total files | Total volume | Move time | Logical throughput |
| ----------- | ------------ | --------- | ------------------ |
| 5000        | ~ 5.4 GB     | 472 ms    | 11.7 GB/s          |
| 20000       | ~ 22.2 GB    | 2023 ms   | 11.27 GB/s         |

The performance results show that the move time is proportional to the number of files, independent of the volume of the files.

_Note: See the exact performance testing environment details_ [_here._](https://github.com/Abhijeet-Gautam5702/forg/blob/main/PERFORMANCE_TEST_RESULTS.md)

## The Misconception: Moving v/s Copying

Most people think of "moving" a file as:

1.  Copying the data to a new location.

2.  Deleting the data from the old location.

If this were true, moving 20GB would take at least 10–20 seconds on a fast SSD (assuming typical ~2GB/s write speeds). This notion, however, is only partially correct.

## The reality

To understand why `forg` is so fast, we have to look at how Operating Systems (like macOS with APFS or Linux with ext4) actually store files.

Internally, a directory is just a special type of file that maps a filename to an _inode_ (the actual address of the data on the disk).

> _Think of the filesystem like a library. Moving a book from the 'Science' shelf to the 'History' shelf doesn't require rewriting the book. You just update the index in the library's catalog. The book stays exactly where it was on the physical floor; only its 'address' in the system changes._

#### So what happens when we 'move' a file?

Internally, the OS changes the mapping of the _inode_ from the source directory to the destination directory. The file's physical address remains the same, but the mapping is changed.

Similarly, when `forg` moves a file within the same drive partition, it uses the _atomic_ `fs::rename` system call (which performs the same logical operation discussed above).

> 'Atomic rename' means the operation is all-or-nothing. If the computer loses power midway, the OS ensures the entry is either in the old location or the new one, with no 'in-between' state.

The actual data on the disk never moves. Not a single bit of the file content is read or written. This is a **metadata-only operation**.

This is why `forg`'s move time is proportional to the number of files, not the size of the files _(as reflected in the performance results section above)_. Moving a 1KB text file takes the exact same amount of time as moving a 10GB 4K movie.

## The edge case: Moving to an external drive

However, the file-moving logic changes completely when you move a file to an external drive or a different partition.

Because the destination drive has its own separate physical disk and filesystem, the OS must physically copy the data across the cable and then delete the original. In this scenario, the file-moving operation becomes I/O-bound. The speed is now strictly limited by the SSD’s write speed or the USB port's bandwidth.

The reason this happens is that an inode has meaning within a single filesystem partition only. Once you cross that boundary (e.g., from your internal SSD to a USB Drive), the bits must physically travel.

## Key takeaways

- Metadata-bound operation: Moving files _within the same drive_ is just a "label change" in the filesystem’s ledger.

- Atomic Renaming: Using `fs::rename` ensures that if a move fails, the file isn't lost or corrupted.

- I/O-bound operation: Moving files to a different drive involves _copy-and-delete_ sequence as the destination now has a separate filesystem of its own.

- Logical Throughput: When you see `forg` hitting 11 GB/s, it’s indicating how fast the OS can update its own mapping records.

---

## Experience the speed yourself

The next time you’re organising your cluttered folders, don't do it manually. Use `forg` to get it done in no time.

Checkout the [official documentation](http://abhijeet-gautam5702.github.io/forg) for installation steps, or contribute to the performance-first logic on [Github](https://github.com/Abhijeet-Gautam5702/forg).
