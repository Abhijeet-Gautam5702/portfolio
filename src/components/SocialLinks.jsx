import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: IoMailSharp, href: "mailto:hello@example.com", label: "Email" },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-4 px-6 md:px-12 mt-6">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-muted hover:text-foreground hover:border-foreground transition-all duration-200"
        >
          <social.icon size={18} />
          <span>{social.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
