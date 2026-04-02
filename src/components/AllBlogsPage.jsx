import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import BlogCard from './BlogCard';
import { blogs } from './blogsData';

const AllBlogsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center">
      <main className="w-full max-w-5xl p-4 md:p-8 pb-20">
        <div className="px-6 md:px-12 space-y-12">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('/')}
              className="p-3 bg-card/50 border border-border rounded-full text-muted hover:text-foreground hover:border-muted transition-all group"
              aria-label="Go back"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <h1 className="text-3xl font-bold text-foreground uppercase tracking-widest">All Blogs</h1>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllBlogsPage;
