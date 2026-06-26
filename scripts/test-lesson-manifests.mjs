import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const lessonsDir = path.join(root, 'lessons');
const lessons = (await readdir(lessonsDir)).filter((name) => /^lesson-\d{2}$/.test(name)).sort();

if (lessons.length < 4) {
  throw new Error(`expected at least 4 progressive lessons, found ${lessons.length}`);
}

for (const lesson of lessons) {
  const dir = path.join(lessonsDir, lesson);
  const files = ['README.md', 'package.json', 'app.json', 'tsconfig.json', 'App.tsx'];
  for (const file of files) {
    const target = path.join(dir, file);
    const info = await stat(target).catch(() => null);
    if (!info?.isFile()) throw new Error(`${lesson} missing ${file}`);
  }

  const pkg = JSON.parse(await readFile(path.join(dir, 'package.json'), 'utf8'));
  for (const dep of ['expo', 'react', 'react-native']) {
    if (!pkg.dependencies?.[dep]) throw new Error(`${lesson} missing dependency ${dep}`);
  }
  if (!pkg.scripts?.start?.includes('expo start')) throw new Error(`${lesson} missing Expo start script`);
  if (!pkg.scripts?.typecheck?.includes('tsc --noEmit')) throw new Error(`${lesson} missing typecheck script`);

  const readme = await readFile(path.join(dir, 'README.md'), 'utf8');
  if (!readme.includes('## 运行方式') || !readme.includes('## 架构师视角')) {
    throw new Error(`${lesson} README must document run steps and architect notes`);
  }
}

console.log(`PASS lesson manifest checks: ${lessons.join(', ')}`);
