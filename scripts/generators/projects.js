import { config } from '../../data/config.js';
import { projects } from '../../data/projects.js';

const { githubOwner, githubTheme } = config;

const generateProjectCard = ({
  name,
  repository,
  owner = githubOwner,
  descriptionLines,
}) => {
  const params = new URLSearchParams({
    username: owner,
    repo: repository,
    theme: githubTheme,
  });

  if (descriptionLines) {
    params.set(
      'description_lines_count',
      descriptionLines,
    );
  }

  const imageUrl =
    `https://github-readme-stats-fast.vercel.app/api/pin/?${params}`;

  const repositoryUrl =
    `https://github.com/${owner}/${repository}`;

  return `[![${name} Repo](${imageUrl})](${repositoryUrl})`;
};

const generateProjectCategory = ({ title, items }) => {
  const cards = items
    .map(generateProjectCard)
    .join('\n');

  return `<details>
<summary><b>${title}</b></summary>

<br/>

${cards}

</details>`;
};

export const generateProjects = () => {
  return Object.values(projects)
    .map(generateProjectCategory)
    .join('\n\n');
};