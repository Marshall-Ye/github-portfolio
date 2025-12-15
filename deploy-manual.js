import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

const DIST_DIR = 'dist';
const REPO_URL = 'https://github.com/Marshall-Ye/github-portfolio.git';
const BRANCH = 'gh-pages';
const CACHE_DIR = join(process.cwd(), '.gh-pages-cache');

console.log('Starting deployment...');

// Clean and recreate cache directory
if (existsSync(CACHE_DIR)) {
  execSync(`rmdir /s /q "${CACHE_DIR}"`, { stdio: 'inherit' });
}
execSync(`mkdir "${CACHE_DIR}"`, { stdio: 'inherit' });

try {
  // Clone the repository
  console.log('Cloning repository...');
  execSync(`git clone --branch ${BRANCH} --single-branch --depth 1 ${REPO_URL} "${CACHE_DIR}"`, {
    stdio: 'inherit',
    cwd: process.cwd()
  });
} catch (err) {
  // If branch doesn't exist, clone and create it
  console.log('Branch does not exist, creating it...');
  execSync(`git clone --single-branch --depth 1 ${REPO_URL} "${CACHE_DIR}"`, {
    stdio: 'inherit',
    cwd: process.cwd()
  });
  execSync(`git checkout -b ${BRANCH}`, {
    stdio: 'inherit',
    cwd: CACHE_DIR
  });
}

// Copy dist files to cache directory
console.log('Copying files...');
execSync(`xcopy /E /I /Y "${join(process.cwd(), DIST_DIR)}\\*" "${CACHE_DIR}"`, {
  stdio: 'inherit',
  cwd: process.cwd()
});

// Commit and push
console.log('Committing changes...');
execSync('git add -A', { stdio: 'inherit', cwd: CACHE_DIR });
execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit', cwd: CACHE_DIR });
console.log('Pushing to GitHub...');
execSync(`git push origin ${BRANCH}`, { stdio: 'inherit', cwd: CACHE_DIR });

console.log('Deployment successful!');






