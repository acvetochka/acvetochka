import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { generateSkills } from './generators/skills.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const README_PATH = path.resolve(__dirname, '../README.md');

const replaceSection = (content, section, generatedContent) => {
  const startMarker = `<!-- START:${section} -->`;
  const endMarker = `<!-- END:${section} -->`;

  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error(
      `Markers for "${section}" section were not found in README.md.`,
    );
  }

  if (startIndex >= endIndex) {
    throw new Error(
      `Invalid markers order for "${section}" section.`,
    );
  }

  const contentStart = startIndex + startMarker.length;

  return (
    content.slice(0, contentStart) +
    `\n${generatedContent}\n` +
    content.slice(endIndex)
  );
};

const generateReadme = () => {
  let readme = fs.readFileSync(README_PATH, 'utf8');

  readme = replaceSection(
    readme,
    'SKILLS',
    generateSkills(),
  );

  fs.writeFileSync(README_PATH, readme);

  console.log('README.md generated successfully.');
};

generateReadme();
