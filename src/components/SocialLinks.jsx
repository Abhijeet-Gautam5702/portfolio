import React from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';
import data from '../data.json';

const iconMap = {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  IoMailSharp
};

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-4 px-6 md:px-12 mt-6">
      {data.socials.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 bg-card border rounded-full text-sm transition-all duration-200 ${
              social.label === 'GitHub' 
                ? 'text-brand border-brand/30 hover:text-foreground hover:border-foreground' 
                : 'text-muted border-border hover:text-foreground hover:border-foreground'
            }`}
          >
            {Icon && <Icon size={18} />}
            <span>{social.label}</span>
          </a>
        );
      })}
    </div>
  );
};


export default SocialLinks;
