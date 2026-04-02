import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Projects', path: '/projects/all' },
    { name: 'Blogs', path: '/blogs/all' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-card/80 backdrop-blur-md border border-brand/20 rounded-full flex items-center gap-2 md:gap-4 shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
      <Link 
        to="/" 
        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
          location.pathname === '/' 
            ? 'bg-foreground text-background' 
            : 'text-muted hover:text-foreground'
        }`}
      >
        Home
      </Link>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            location.pathname === link.path
              ? 'bg-foreground text-background'
              : 'text-muted hover:text-foreground'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
