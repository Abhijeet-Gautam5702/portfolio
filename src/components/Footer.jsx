import React from 'react';
import data from '../data.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const githubLink = data.socials.find(s => s.label === 'GitHub')?.href || '#';
  
  return (
    <footer className="w-full max-w-5xl mx-auto px-6 md:px-12 py-12 border-t border-border/40 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-muted">
        <p>
          Developed by{' '}
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative text-brand hover:text-brand transition-colors group"
          >
            {data.profile.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
        </p>
        <p>© {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
