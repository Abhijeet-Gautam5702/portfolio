import React from "react";
import data from "../data.json";

const TechnicalPapers = () => {
  const papers = data.sections.find((s) => s.id === "papers")?.items || [];

  if (papers.length === 0) return null;

  return (
    <div className="mt-16 space-y-8">
      <h2 className="text-xl font-semibold text-foreground">
        Technical Papers
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {papers.map((paper, index) => (
          <div
            key={index}
            className="p-6 bg-card/50 border border-border rounded-xl flex flex-col gap-4"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                {paper.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {paper.description}
              </p>
            </div>
            <div className="flex justify-start">
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-xs font-medium text-muted hover:text-brand transition-colors whitespace-nowrap group/paper"
              >
                View paper &rarr;
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover/paper:w-full rounded-full"></span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalPapers;
