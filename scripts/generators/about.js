import { about } from '../../data/about.js';

export const generateAbout = () => {
  const items = about.intro
    .map((item) => `- ${item}`)
    .join('\n');

  const portfolio = `[${about.portfolio.label}](${about.portfolio.url})`;

  return `${items}\n\n${portfolio}`;
};