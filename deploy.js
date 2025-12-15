import { publish, clean } from 'gh-pages';
import { execSync } from 'child_process';

// Get git executable path
let gitCmd = 'git';
try {
  const gitPath = execSync('where git', { encoding: 'utf-8' }).trim().split('\n')[0];
  if (gitPath) {
    gitCmd = gitPath;
  }
} catch (err) {
  // Use default 'git' if where command fails
}

// Clean cache first
clean();

publish(
  'dist',
  {
    repo: 'https://github.com/Marshall-Ye/github-portfolio.git',
    branch: 'gh-pages',
    dotfiles: true,
    message: 'Deploy to GitHub Pages',
    git: gitCmd
  },
  (err) => {
    if (err) {
      console.error('Deployment failed:', err);
      console.error('Error details:', err.message);
      process.exit(1);
    } else {
      console.log('Deployment successful!');
    }
  }
);



