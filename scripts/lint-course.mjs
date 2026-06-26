import fs from 'node:fs';
import path from 'node:path';
import { collectLessonIssues, fileExists, listLessonDirs, repoRoot, requiredRootDocs } from './course-rules.mjs';

const issues = [];

for (const doc of requiredRootDocs) {
  if (!fileExists(doc)) issues.push(`missing ${doc}`);
}

issues.push(...collectLessonIssues());

for (const lesson of listLessonDirs()) {
  const packageJson = path.join(repoRoot, lesson, 'package.json');
  if (fs.existsSync(packageJson)) {
    JSON.parse(fs.readFileSync(packageJson, 'utf8'));
  }
}

if (issues.length > 0) {
  console.error('Course lint failed:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`Course lint passed for ${listLessonDirs().length} lesson(s).`);
