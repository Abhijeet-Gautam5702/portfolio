import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import ProfileImage from './components/ProfileImage';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import WorkExperience from './components/WorkExperience';
import OpenSourceContributions from './components/OpenSourceContributions';
import Projects from './components/Projects';
import AllProjectsPage from './components/AllProjectsPage';
import Blogs from './components/Blogs';
import AllBlogsPage from './components/AllBlogsPage';
import ContributionsPage from './components/ContributionsPage';
import WorkExperienceDetailsPage from './components/WorkExperienceDetailsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

import data from './data.json';

const sectionComponents = {
  'work-experience': WorkExperience,
  'projects': Projects,
  'open-source': OpenSourceContributions,
  'blogs': Blogs,
};

const HomePage = () => {
  const sortedSections = [...data.sections]
    .filter((section) => !section.hide)
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="pb-10 w-full">
      <div className="relative">
        <Banner />
        <ProfileImage />
      </div>
      <Hero />
      <SocialLinks />
      {sortedSections.map((section) => {
        const Component = sectionComponents[section.id];
        return Component ? <Component key={section.id} /> : null;
      })}
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'SYSTEM';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    const applyTheme = () => {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const effectiveTheme = theme === 'SYSTEM' ? systemPreference : theme.toLowerCase();
      root.setAttribute('data-theme', effectiveTheme);
    };

    applyTheme();
    localStorage.setItem('theme', theme);

    if (theme === 'SYSTEM') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme();
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <div 
          className="fixed top-0 left-0 w-full h-[100px] backdrop-blur-[3px] z-[40] pointer-events-none" 
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
          }}
          aria-hidden="true"
        ></div>
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="flex-grow w-full max-w-5xl mx-auto pt-24 px-6 md:px-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs/all" element={<AllBlogsPage />} />
            <Route path="/projects/all" element={<AllProjectsPage />} />
            <Route path="/contributions/:repoName" element={<ContributionsPage />} />
            <Route path="/work-experience/:companySlug" element={<WorkExperienceDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}


export default App
