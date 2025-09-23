import { Card, CardHeader, CardContent } from '../ui/card';
import type { GitHubRepo } from '@/types/types';

export const RepoCard: React.FC<{ repo: GitHubRepo }> = ({ repo }) => (
  <Card className="flex flex-col gap-xs">
    <CardHeader>
      <div className="flex items-center justify-between">
        <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="font-semibold">
          {repo.name}
        </a>
      </div>
      <p className="text-neutral-700 dark:text-neutral-300 text-small flex-1">
        {repo.description ? (
          repo.description
        ) : (
          <span className="text-neutral-500">No description</span>
        )}
      </p>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between pt-sm">
        <div className="flex gap-2 items-center text-xs text-neutral-500">
          {repo.language && (
            <span className="flex items-center gap-2xs">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  repo.language === 'TypeScript'
                    ? 'bg-primary-700'
                    : repo.language === 'Go'
                    ? 'bg-primary-300'
                    : 'bg-error-700'
                }`}
              />
              {repo.language}
            </span>
          )}
        </div>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-small">
          View Repo
        </a>
      </div>
    </CardContent>
  </Card>
);
