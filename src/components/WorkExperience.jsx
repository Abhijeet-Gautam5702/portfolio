import React from 'react';
import data from '../data.json';

const WorkExperience = () => {
  const experiences = data.sections.find(s => s.id === 'work-experience')?.items || [];

  return (
    <div className="mt-16 space-y-8">
      <h2 className="text-xl font-bold text-foreground">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative flex flex-col md:flex-row md:items-start justify-between p-4 md:p-6 bg-card/50 border border-border rounded-xl hover:border-muted transition-colors duration-300"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">
                  {exp.company}
                </h3>
                <span className="text-[10px] md:text-xs px-2 py-0.5 bg-border rounded-full text-muted">
                  {exp.location}
                </span>
              </div>
              <p className="text-sm text-muted/80">{exp.role}</p>
              <p className="text-sm text-muted mt-2 max-w-xl">{exp.description}</p>
            </div>
            <div className="mt-2 md:mt-0 text-xs font-mono text-muted uppercase tracking-wider">
              {exp.period}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
