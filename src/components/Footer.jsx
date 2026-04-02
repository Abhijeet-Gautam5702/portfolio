import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-5xl mx-auto px-6 md:px-12 py-12 border-t border-border/40 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-muted">
        <p>Developed by <span className="text-brand">Abhijeet Gautam</span></p>
        <p>© {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
