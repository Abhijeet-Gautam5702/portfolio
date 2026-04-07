import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";

const WorkExperience = () => {
  const navigate = useNavigate();
  const experiences =
    data.sections.find((s) => s.id === "work-experience")?.items || [];

  return (
    <div className="mt-16 space-y-8">
      <h2 className="text-xl font-semibold text-foreground">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            onClick={() => navigate(`/work-experience/${exp.slug}`)}
            className="group relative flex flex-col md:flex-row md:items-start justify-between p-4 md:p-6 bg-card/50 border border-border rounded-xl hover:border-brand transition-all duration-300 cursor-pointer"
          >
            <div className="space-y-1 w-full">
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-brand transition-colors">
                    {exp.company}
                  </h3>
                  <div className="md:hidden text-xs font-mono text-muted tracking-wider">
                    {exp.location}
                  </div>
                </div>
                {exp.company_type && (
                  <span className="hidden md:inline-block text-xs md:text-sm px-2 py-0.5 border border-brand/30 rounded-full text-brand">
                    {exp.company_type}
                  </span>
                )}
              </div>

              <p className="text-sm text-muted/80">
                {exp.role} <span className="md:hidden text-muted/60 ml-1 italic font-mono text-[10px] uppercase">({exp.period})</span>
              </p>

              <p className="text-sm text-muted mt-2 max-w-xl line-clamp-2 md:line-clamp-none">
                {exp.description}
              </p>

              <div className="mt-4 md:hidden">
                <button className="text-xs font-medium text-brand flex items-center gap-1">
                  View details <span className="text-lg">&rarr;</span>
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-end mt-2 md:mt-0 whitespace-nowrap">
              <div className="text-xs font-mono text-muted uppercase tracking-wider">
                {exp.period}
              </div>
              <div className="text-xs font-mono text-muted tracking-wider mt-2">
                {exp.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
