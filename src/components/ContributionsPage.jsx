import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { VscGitPullRequest, VscGitMerge } from 'react-icons/vsc';
import data from '../data.json';

const ContributionsPage = () => {
  const { repoName } = useParams();
  const navigate = useNavigate();
  const prs = data.prs;

  const filteredPrs = repoName && repoName !== 'all' 
    ? prs.filter(pr => pr.repo === repoName)
    : prs;

  return (
    <div className="pb-20">
      <div className="space-y-12">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/')}
            className="p-3 bg-card/50 border border-border rounded-full text-muted hover:text-foreground hover:border-muted transition-all group"
            aria-label="Go back"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <h1 className="text-3xl font-bold text-foreground uppercase tracking-wider">
            {repoName && repoName !== 'all' ? `${repoName} Contributions` : 'Contributions'}
          </h1>
        </div>

        <div className="space-y-6">
          {filteredPrs.length > 0 ? (
            filteredPrs.map((pr) => (
              <div 
                key={pr.id} 
                className="w-full p-5 md:p-6 bg-card/50 border border-border rounded-xl flex items-center justify-between hover:border-brand transition-colors group"
              >
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className={`p-2 rounded-lg ${pr.status === 'merged' ? 'bg-purple-500/10 text-purple-500' : 'bg-green-500/10 text-green-500'}`}>
                    {pr.status === 'merged' ? <VscGitMerge size={20} /> : <VscGitPullRequest size={20} />}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-foreground font-medium truncate transition-colors">{pr.title}</h3>
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
