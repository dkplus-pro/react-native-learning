import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const requiredComment = '架构师提示';
const lessons = (await readdir('lessons')).filter((name) => /^lesson-\d{2}$/.test(name)).sort();
const errors = [];

for (const lesson of lessons) {
  const appPath = path.join('lessons', lesson, 'App.tsx');
  const app = await readFile(appPath, 'utf8');
  if (!app.includes(requiredComment)) {
    errors.push(`${appPath} should include explanatory comments marked ${requiredComment}`);
  }
  if (/console\.log\(/.test(app)) {
    errors.push(`${appPath} should not ship console.log debugging output`);
  }

  const readme = await readFile(path.join('lessons', lesson, 'README.md'), 'utf8');
  if (!readme.startsWith(`# ${lesson}`)) {
    errors.push(`${lesson}/README.md should start with the lesson id heading`);
  }
}

if (errors.length) {
  throw new Error(errors.join('\n'));
}

console.log(`PASS lesson lint checks: ${lessons.length} lessons include required docs/comments`);
