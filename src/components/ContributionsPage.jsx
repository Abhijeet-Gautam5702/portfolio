import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { VscGitPullRequest, VscGitMerge } from 'react-icons/vsc';

const prs = [
  { id: 1, repo: 'requestly', title: 'fix: updated interceptor logic for safari', status: 'merged', date: 'Oct 12' },
  { id: 2, repo: 'flexprice', title: 'feat: add support for tiered pricing', status: 'open', date: 'Oct 5' },
  { id: 3, repo: 'cal.com', title: 'refactor: simplify invite user flow', status: 'merged', date: 'Sept 28' },
  { id: 4, repo: 'supabase', title: 'docs: clarify self-hosting steps', status: 'merged', date: 'Sept 15' },
  { id: 5, repo: 'requestly', title: 'chore: bump dependencies for security', status: 'merged', date: 'Sept 10' },
  { id: 6, repo: 'flexprice', title: 'fix: handling undefined values in dashboard', status: 'merged', date: 'Aug 22' },
];

const ContributionsPage = () => {
  const { repoName } = useParams();
  const navigate = useNavigate();

  const filteredPrs = repoName && repoName !== 'all' 
    ? prs.filter(pr => pr.repo === repoName)
    : prs;

  return (
    <div className="w-full max-w-5xl p-4 md:p-8 pb-20">
      <div className="px-6 md:px-12 space-y-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group mb-8"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <h1 className="text-2xl font-bold text-foreground capitalize">
          {repoName && repoName !== 'all' ? `${repoName} Contributions` : 'All Open Source Contributions'}
        </h1>

        <div className="space-y-4">
          {filteredPrs.length > 0 ? (
            filteredPrs.map((pr) => (
              <div 
                key={pr.id} 
                className="p-4 bg-card/50 border border-border rounded-xl flex items-center justify-between hover:border-muted transition-colors group"
              >
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className={`p-2 rounded-lg ${pr.status === 'merged' ? 'bg-purple-500/10 text-purple-500' : 'bg-green-500/10 text-green-500'}`}>
                    {pr.status === 'merged' ? <VscGitMerge size={20} /> : <VscGitPullRequest size={20} />}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-foreground font-medium truncate group-hover:text-white transition-colors">{pr.title}</h3>
                    <p className="text-xs text-muted flex items-center gap-2">
                      <span className="capitalize">{pr.repo}</span> • {pr.date}
                    </p>
                  </div>
                </div>
                <div className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-tight ${pr.status === 'merged' ? 'bg-purple-500/10 text-purple-400' : 'bg-green-500/10 text-green-400'}`}>
                  {pr.status}
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted italic text-center py-20">No contributions found for this repository.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContributionsPage;
