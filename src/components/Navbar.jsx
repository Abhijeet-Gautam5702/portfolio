import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineLightMode, MdOutlineDarkMode, MdOutlineSettingsBrightness } from 'react-icons/md';

const Navbar = ({ theme, setTheme }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const navLinks = [
    { name: 'Projects', path: '/projects/all' },
    { name: 'Blogs', path: '/blogs/all' },
  ];

  const themes = [
    { name: 'LIGHT', icon: <MdOutlineLightMode className="w-4 h-4" /> },
    { name: 'DARK', icon: <MdOutlineDarkMode className="w-4 h-4" /> },
    { name: 'SYSTEM', icon: <MdOutlineSettingsBrightness className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentIcon = themes.find(t => t.name === theme)?.icon;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-card/80 backdrop-blur-xl border border-brand/20 rounded-full flex items-center gap-2 md:gap-4 shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300">

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
      
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-muted hover:text-foreground transition-colors rounded-full hover:bg-foreground/5 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {React.cloneElement(currentIcon, { className: "w-5 h-5" })}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 py-2 w-36 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {themes.map((t) => (
              <div key={t.name} className="px-2">
                <button
                  onClick={() => {
                    setTheme(t.name);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-xs font-medium flex items-center gap-3 transition-all duration-200 rounded-lg ${
                    theme === t.name 
                      ? 'bg-foreground text-background' 
                      : 'text-muted hover:text-foreground hover:bg-foreground/10'
                  }`}
                >
                  {t.icon}
                  {t.name}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
