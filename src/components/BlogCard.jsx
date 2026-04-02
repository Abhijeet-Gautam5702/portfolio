import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-5 md:p-6 bg-card/50 border border-border rounded-xl cursor-pointer hover:border-muted hover:bg-card transition-all duration-300 group block"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-3 flex-grow">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors leading-snug">
              {blog.title}
            </h3>
            {blog.description && (
              <p className="text-sm text-muted mt-2 max-w-2xl line-clamp-2">
                {blog.description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {blog.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-0.5 text-[10px] font-mono border border-border rounded-md text-muted uppercase tracking-wider bg-border/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-xs font-mono text-muted uppercase tracking-wider whitespace-nowrap pt-1">
          {blog.date}
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
