import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { replaceSection } from './utils/replaceSection.js';
import { generateSkills } from './generators/skills.js';
import { generateProjects } from './generators/projects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const README_PATH = path.resolve(__dirname, '../README.md');

const generateReadme = () => {
  let readme = fs.readFileSync(README_PATH, 'utf8');

  readme = replaceSection(
    readme,
    'SKILLS',
    generateSkills(),
  );

  readme = replaceSection(
    readme,
    'PROJECTS',
    generateProjects(),
  );

  fs.writeFileSync(README_PATH, readme);

  console.log('README.md generated successfully.');
};

generateReadme();
