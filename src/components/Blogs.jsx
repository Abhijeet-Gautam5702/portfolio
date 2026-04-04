import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import BlogCard from './BlogCard';
import data from '../data.json';

const Blogs = () => {
  const navigate = useNavigate();
  const blogs = data.sections.find(s => s.id === 'blogs')?.items || [];
  const latestBlogs = blogs.slice(0, 4);

  return (
    <div className="mt-16 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground tracking-wider">Blogs</h2>
        <button 
          onClick={() => navigate('/blogs/all')}
          className="relative flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
        >
          <span className="relative">
            View All
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full rounded-full"></span>
          </span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>      </div>

      <div className="grid grid-cols-1 gap-4">
        {latestBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
