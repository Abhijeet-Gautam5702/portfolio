import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { VscRepo } from 'react-icons/vsc';

const topRepos = [
  { name: 'Requestly', description: 'Open-source alternative to Charles Proxy & Fiddler.', stars: 2100, language: 'TypeScript' },
  { name: 'Flexprice', description: 'Open-source metering and billing infrastructure.', stars: 1200, language: 'Go' },
  { name: 'Cal.com', description: 'Scheduling infrastructure for everyone.', stars: 31000, language: 'TypeScript' },
  { name: 'Supabase', description: 'The open source Firebase alternative.', stars: 65000, language: 'TypeScript' },
];

const OpenSourceContributions = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-16 px-6 md:px-12 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Open Source Contributions</h2>
        <button 
          onClick={() => navigate('/contributions/all')}
          className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
        >
          View All <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topRepos.map((repo) => (
          <div
            key={repo.name}
            onClick={() => navigate(`/contributions/${repo.name.toLowerCase()}`)}
            className="p-5 bg-card/50 border border-border rounded-xl cursor-pointer hover:border-muted hover:bg-card transition-all duration-300 group"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <VscRepo className="text-muted group-hover:text-foreground transition-colors" />
                  <h3 className="font-semibold text-foreground">{repo.name}</h3>
                </div>
                <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-muted">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {repo.language}
                  </span>
                  <span>★ {repo.stars.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenSourceContributions;
