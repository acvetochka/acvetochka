import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { replaceSection } from './utils/replaceSection.js';
import { generateSkills } from './generators/skills.js';
import { generateProjects } from './generators/projects.js';
import { generateCredentials } from './generators/credentials.js';
import { generateStatistics } from './generators/statistics.js';
import { generateAbout } from './generators/about.js';
import { generateContacts } from './generators/contacts.js';
import { sections } from '../data/sections.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const README_PATH = path.resolve(__dirname, '../README.md');

const generateReadme = () => {
  let readme = fs.readFileSync(README_PATH, 'utf8');

  sections.forEach(({ name, generate }) => {
    readme = replaceSection(
      readme,
      name,
      generate(),
    );
  });

  // readme = replaceSection(
  //   readme,
  //   'ABOUT',
  //   generateAbout(),
  // );

  // readme = replaceSection(
  //   readme,
  //   'SKILLS',
  //   generateSkills(),
  // );

  // readme = replaceSection(
  //   readme,
  //   'PROJECTS',
  //   generateProjects(),
  // );

  // readme = replaceSection(
  //   readme,
  //   'STATISTICS',
  //   generateStatistics(),
  // );

  // readme = replaceSection(
  //   readme,
  //   'CREDENTIALS',
  //   generateCredentials(),
  // );

  // readme = replaceSection(
  //   readme,
  //   'CONTACTS',
  //   generateContacts(),
  // );

  fs.writeFileSync(README_PATH, readme);

  console.log('README.md generated successfully.');
};

generateReadme();
