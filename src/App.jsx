import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

const HomePage = () => (
  <div className="w-full max-w-5xl p-4 md:p-8 pb-10">
    <div className="relative">
      <Banner />
      <ProfileImage />
    </div>
    <Hero />
    <SocialLinks />
    <WorkExperience />
    <Projects />
    <OpenSourceContributions />
    <Blogs />
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-background flex flex-col items-center pt-24">
        <Navbar />
        <main className="flex-grow w-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs/all" element={<AllBlogsPage />} />
            <Route path="/projects/all" element={<AllProjectsPage />} />
            <Route path="/contributions/:repoName" element={<ContributionsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}


export default App
