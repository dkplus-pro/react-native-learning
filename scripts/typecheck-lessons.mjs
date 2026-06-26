import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { listLessonDirs, repoRoot } from './course-rules.mjs';

const lessons = listLessonDirs();
const issues = [];

for (const lesson of lessons) {
  const appPath = path.join(repoRoot, lesson, 'App.tsx');
  const tsconfigPath = path.join(repoRoot, lesson, 'tsconfig.json');
  if (!fs.existsSync(appPath) || !fs.existsSync(tsconfigPath)) continue;

  const appSource = fs.readFileSync(appPath, 'utf8');
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));

  if (!appSource.includes('import React')) issues.push(`${lesson}/App.tsx must import React`);
  if (!appSource.includes("from 'react-native'") && !appSource.includes('from "react-native"')) {
    issues.push(`${lesson}/App.tsx must import from react-native`);
  }
  if (!appSource.includes('StyleSheet.create')) issues.push(`${lesson}/App.tsx must use StyleSheet.create`);
  if (tsconfig.compilerOptions?.jsx !== 'react-native') {
    issues.push(`${lesson}/tsconfig.json must set compilerOptions.jsx to react-native`);
  }
  if (tsconfig.compilerOptions?.strict !== true) {
    issues.push(`${lesson}/tsconfig.json must enable strict mode`);
  }

  try {
    execFileSync('npx', ['tsc', '-p', path.join(repoRoot, lesson, 'tsconfig.json'), '--noEmit'], {
      cwd: repoRoot,
      stdio: 'pipe',
    });
  } catch (error) {
    const output = `${error.stdout ?? ''}${error.stderr ?? ''}`.trim();
    issues.push(`${lesson} failed tsc --noEmit${output ? `: ${output}` : ''}`);
  }
}

if (issues.length > 0) {
  console.error('Lesson type-shape check failed:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`Lesson type-shape check passed for ${lessons.length} lesson(s).`);
