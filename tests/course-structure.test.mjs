import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import {
  collectLessonIssues,
  fileExists,
  lessonRequiredFiles,
  listLessonDirs,
  repoRoot,
} from '../scripts/course-rules.mjs';

const expectedLessons = [
  'lessons/lesson-01',
  'lessons/lesson-02',
  'lessons/lesson-03',
  'lessons/lesson-04',
];

test('course has four progressive standalone lesson directories', () => {
  assert.deepEqual(listLessonDirs(), expectedLessons);
});

test('lesson directories include required runnable Expo/TypeScript artifacts', () => {
  for (const lesson of listLessonDirs()) {
    for (const file of lessonRequiredFiles) {
      assert.equal(fileExists(path.join(lesson, file)), true, `${lesson}/${file}`);
    }
  }
});

test('course verification contract has no structural issues', () => {
  assert.deepEqual(collectLessonIssues(), []);
});

test('every lesson README documents standalone setup commands', () => {
  for (const lesson of expectedLessons) {
    const readme = fs.readFileSync(path.join(repoRoot, lesson, 'README.md'), 'utf8');
    assert.match(readme, /npm install/, `${lesson} should document npm install`);
    assert.match(readme, /npm (run )?start/, `${lesson} should document start command`);
    assert.match(readme, /npm run typecheck/, `${lesson} should document typecheck command`);
  }
});
