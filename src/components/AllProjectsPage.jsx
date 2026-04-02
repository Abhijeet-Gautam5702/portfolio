import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { VscRepo } from 'react-icons/vsc';
import { projects } from './projectsData';

const AllProjectsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-5xl p-4 md:p-8 pb-20">
      <div className="px-6 md:px-12 space-y-12">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/')}
            className="p-3 bg-card/50 border border-border rounded-full text-muted hover:text-foreground hover:border-muted transition-all group"
            aria-label="Go back"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <h1 className="text-3xl font-bold text-foreground uppercase tracking-widest">All Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-card/50 border border-border rounded-xl cursor-pointer hover:border-muted hover:bg-card transition-all duration-300 group block"
            >
              <div className="flex items-start justify-between h-full">
                <div className="space-y-4 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <VscRepo className="text-muted group-hover:text-foreground transition-colors text-lg" />
                      <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-xs font-mono text-muted pt-4">
                    <span className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${
                        project.language === 'Rust' ? 'bg-orange-500' : 
                        project.language === 'TypeScript' ? 'bg-blue-500' : 
                        project.language === 'Go' ? 'bg-cyan-500' : 'bg-gray-500'
                      }`}></span>
                      {project.language}
                    </span>
                    <span className="flex items-center gap-1">★ {project.stars.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjectsPage;
