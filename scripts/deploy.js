#!/usr/bin/env node

import { createInterface } from 'readline';
import { execSync } from 'child_process';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter commit message: ', (msg) => {
  rl.close();
  try {
    execSync('npm run build', { stdio: 'inherit' });
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${msg}"`, { stdio: 'inherit' });
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('\n✅ Deployed successfully!');
  } catch (err) {
    console.error('\n❌ Deployment failed:', err.message);
  }
});