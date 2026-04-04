import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import data from '../data.json';

const WorkExperienceDetailsPage = () => {
  const { companySlug } = useParams();
  const navigate = useNavigate();
  
  const experiences = data.sections.find(s => s.id === 'work-experience')?.items || [];
  const experience = experiences.find(exp => exp.slug === companySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!experience) {
    return (
      <div className="pb-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Work Experience not found</h1>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-card border border-border rounded-full text-muted hover:text-foreground hover:border-brand transition-all"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="space-y-12">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/')}
            className="p-3 bg-card/50 border border-border rounded-full text-muted hover:text-foreground hover:border-muted transition-all group"
            aria-label="Go back"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-foreground tracking-tight">
              {experience.company}
            </h1>
            <p className="text-lg text-brand font-medium">
              {experience.role}
            </p>
          </div>
        </div>

        <div className="space-y-8 bg-card/30 border border-border rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
            <div className="text-muted">
              <span className="font-medium text-foreground">{experience.location}</span>
            </div>
            <div className="text-sm font-mono text-muted uppercase tracking-wider bg-border/50 px-3 py-1 rounded-md">
              {experience.period}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-muted leading-relaxed italic">
              {experience.description}
            </p>
            
            <ul className="space-y-4">
              {experience.points?.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 flex-shrink-0" />
                  <span className="text-muted leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceDetailsPage;
