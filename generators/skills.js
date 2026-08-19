import { skills } from '../../data/skills.js';
import { providers } from '../../data/providers.js";

// const iconProviders = {
//   skillicons: (icon) =>
//     `https://skillicons.dev/icons?i=${icon}`,

//   syvixor: (icon) =>
//     `https://skills.syvixor.com/api/icons?i=${icon}`,
// };

const generateIcon = (skill, defaultProvider) => {
  const provider = skill.provider ?? defaultProvider;

  if (!provider) {
    console.warn(
      `⚠️ No provider specified for skill "${skill.title}".`,
    );

    return skill.title;
  }

  const getIconUrl = iconProviders[provider];

  if (!getIconUrl) {
    console.warn(
      `⚠️ Unknown icon provider "${provider}" for skill "${skill.title}".`,
    );

    return skill.title;
  }

  const src = getIconUrl(skill.icon);

  return `<img src="${src}" title="${skill.title}" alt="${skill.title}" />`;
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
