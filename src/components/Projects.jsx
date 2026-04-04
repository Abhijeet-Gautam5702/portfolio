import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa6';
import { VscRepo } from 'react-icons/vsc';
import data from '../data.json';

const Projects = () => {
  const navigate = useNavigate();
  const projects = data.sections.find(s => s.id === 'projects')?.items || [];
  const topProjects = projects.slice(0, 4);

  return (
    <div className="mt-16 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Projects</h2>
        <button 
          onClick={() => navigate('/projects/all')}
          className="relative flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
        >
          <span className="relative">
            View All
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full rounded-full"></span>
          </span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-card/50 border border-border rounded-xl cursor-pointer hover:border-brand hover:bg-card transition-all duration-300 group block"
          >
            <div className="flex items-start justify-between h-full">
              <div className="space-y-3 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <VscRepo className="text-muted group-hover:text-foreground transition-colors" />
                    <h3 className="font-semibold text-foreground">{project.name}</h3>
                  </div>
                  <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 text-xs font-mono text-muted pt-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      {project.languages?.map((lang, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-0.5 border rounded-md text-[11px] uppercase tracking-wider"
                          style={{ borderColor: `${lang.color}40`, color: lang.color }}
                        >
                          {lang.name}
                        </span>
                      ))}
                    </div>
                    {project.stars > 0 && (
                      <span className="flex items-center gap-1">
                        <FaStar className="text-[10px] mb-0.5" />
                        {project.stars.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="relative text-xs font-medium text-muted hover:text-brand transition-colors whitespace-nowrap group/visit"
                    >
                      Visit &rarr;
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover/visit:w-full rounded-full"></span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
