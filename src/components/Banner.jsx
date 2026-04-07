import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-32 md:h-56 bg-card rounded-xl border border-border mt-4 mb-[-4rem] md:mb-[-5rem] relative overflow-hidden group">
      {/* Background patterns: subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]"
        style={{
          backgroundImage: "radial-gradient(var(--brand) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Dynamic Glow effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[100px] -mr-32 -mt-32 transition-all duration-1000 group-hover:bg-brand/20 group-hover:scale-110" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand/5 rounded-full blur-[80px] -ml-24 -mb-24" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center items-end px-6 md:px-16 text-right z-10">
        <div className="max-w-[80%] md:max-w-[70%] lg:max-w-[65%] pointer-events-none select-none">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-brand/10 border border-brand/20 mb-2 md:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shadow-[0_0_8px_var(--brand)]" />
            <span className="text-[9px] md:text-[11px] font-mono text-brand uppercase tracking-[0.2em] font-bold">
              Philosophy
            </span>
          </div>

          <h2 className="text-[13px] sm:text-base md:text-2xl lg:text-3xl font-semibold leading-tight text-foreground/90">
            I <span className="">understand</span> software{" "}
            <br className="hidden sm:block" />
            by{" "}
            <span className="relative inline-block mt-1">
              <span className="relative z-10 text-foreground">
                <span className="text-brand not-italic">building</span> it from
                scratch
              </span>
              <span className="absolute bottom-0.5 md:bottom-1.5 left-0 w-full h-1.5 md:h-3 bg-brand/20 -rotate-1 z-0 rounded-sm transition-transform duration-500 group-hover:scale-x-110 group-hover:origin-right" />
            </span>
            .
          </h2>

          <div className="mt-2 md:mt-4 opacity-60 hidden md:block">
            <p className="text-[10px] font-mono text-brand/80 tracking-tighter">
              {`fn learn(concept: Concept) { build_from_scratch(concept); }`}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative tech elements */}
      <div className="absolute top-0 right-0 w-px h-20 bg-gradient-to-b from-brand/40 to-transparent mr-10" />
      <div className="absolute top-10 right-0 w-20 h-px bg-gradient-to-l from-brand/40 to-transparent" />

      {/* Subtle corner accent */}
      <div className="absolute bottom-4 right-4 w-1 h-1 bg-brand/40 rounded-full" />
      <div className="absolute bottom-4 right-8 w-1 h-1 bg-brand/20 rounded-full" />
      <div className="absolute bottom-8 right-4 w-1 h-1 bg-brand/20 rounded-full" />
    </div>
  );
};

export default Banner;
