import { skills } from '../../data/skills.js';
import { iconProviders } from '../../data/providers.js';

const generateIcon = (skill, defaultProvider) => {
  const provider = skill.provider ?? defaultProvider;

  if (!provider) {
    throw new Error(
      `No icon provider specified for skill "${skill.title}".`,
    );
  }

  const iconProvider = iconProviders[provider];

  if (!iconProvider) {
    throw new Error(
      `Unknown icon provider "${provider}" for skill "${skill.title}". ` +
      `Available providers: ${Object.keys(iconProviders).join(', ')}`,
    );
  }

  const src = iconProvider.getUrl(skill.icon);

  return `<img src="${src}" title="${skill.title}" alt="${skill.title}" />&nbsp;`;
};

const generateCategory = ({ title, provider, items }) => {
  const icons = items
    .map((skill) => generateIcon(skill, provider))
    .join(' ');

  return `**${title}**:

<div>
  ${icons}
</div>`;
};

export const generateSkills = () => {
  return Object.values(skills)
    .map(generateCategory)
    .join('\n\n');
};
