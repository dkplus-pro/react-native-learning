import fs from 'node:fs';
import path from 'node:path';

export const repoRoot = path.resolve(new URL('..', import.meta.url).pathname);

export const requiredRootDocs = [
  'README.md',
  'docs/verification.md',
];

export const lessonRequiredFiles = [
  'README.md',
  'package.json',
  'app.json',
  'App.tsx',
  'tsconfig.json',
];

export function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function fileExists(relativePath) {
  return fs.existsSync(path.join(repoRoot, relativePath));
}

export function listLessonDirs() {
  const lessonsRoot = path.join(repoRoot, 'lessons');
  if (!fs.existsSync(lessonsRoot)) return [];
  return fs
    .readdirSync(lessonsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^lesson-\d{2}$/.test(entry.name))
    .map((entry) => path.join('lessons', entry.name))
    .sort();
}

export function collectLessonIssues() {
  const issues = [];
  const lessons = listLessonDirs();

  if (lessons.length === 0) {
    issues.push('missing lessons/lesson-XX directories');
    return issues;
  }

  for (const lesson of lessons) {
    for (const file of lessonRequiredFiles) {
      if (!fileExists(path.join(lesson, file))) {
        issues.push(`${lesson} is missing ${file}`);
      }
    }

    const packagePath = path.join(repoRoot, lesson, 'package.json');
    if (fs.existsSync(packagePath)) {
      const pkg = readJson(packagePath);
      if (!pkg.private) issues.push(`${lesson}/package.json must be private`);
      if (!pkg.scripts?.start) issues.push(`${lesson}/package.json must define scripts.start`);
      if (!pkg.scripts?.typecheck) issues.push(`${lesson}/package.json must define scripts.typecheck`);
      if (!pkg.dependencies?.expo) issues.push(`${lesson}/package.json must depend on expo`);
      if (!pkg.dependencies?.react) issues.push(`${lesson}/package.json must depend on react`);
      if (!pkg.dependencies?.['react-native']) issues.push(`${lesson}/package.json must depend on react-native`);
      if (!pkg.devDependencies?.typescript) issues.push(`${lesson}/package.json must devDepend on typescript`);
    }

    const appPath = path.join(repoRoot, lesson, 'App.tsx');
    if (fs.existsSync(appPath)) {
      const appSource = fs.readFileSync(appPath, 'utf8');
      if (!appSource.includes('//')) {
        issues.push(`${lesson}/App.tsx should contain explanatory comments`);
      }
      if (!appSource.includes('export default function')) {
        issues.push(`${lesson}/App.tsx should export a default component`);
      }
    }

    const readmePath = path.join(repoRoot, lesson, 'README.md');
    if (fs.existsSync(readmePath)) {
      const readme = fs.readFileSync(readmePath, 'utf8');
      for (const requiredText of ['学习目标', '运行方式', 'Expo', 'TypeScript']) {
        if (!readme.includes(requiredText)) {
          issues.push(`${lesson}/README.md should mention ${requiredText}`);
        }
      }
    }
  }

  return issues;
}
