import { generateAbout } from "../scripts/generators/about.js";
import { generateContacts } from "../scripts/generators/contacts.js";
import { generateCredentials } from "../scripts/generators/credentials.js";
import { generateProjects } from "../scripts/generators/projects.js";
import { generateSkills } from "../scripts/generators/skills.js";
import { generateStatistics } from "../scripts/generators/statistics.js";

export const sections = [
  {
    name: 'ABOUT',
    generate: generateAbout,
  },
  {
    name: 'SKILLS',
    generate: generateSkills,
  },
  {
    name: 'PROJECTS',
    generate: generateProjects,
  },
  {
    name: 'STATISTICS',
    generate: generateStatistics,
  },
  {
    name: 'CREDENTIALS',
    generate: generateCredentials,
  },
  {
    name: 'CONTACTS',
    generate: generateContacts,
  },
];