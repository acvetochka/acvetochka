import { config } from '../../data/config.js';
import { statistics } from '../../data/statistics.js';
import { buildUrl } from '../utils/buildUrl.js';

const { githubOwner, githubStats } = config;

const generateStatistic = ({
  endpoint,
  params = {},
  link,
  alt = '',
}) => {
  const url = buildUrl(endpoint, {
    username: githubOwner,
    theme: githubStats.theme,
    ...params,
  });

  const image = `<img src="${url}" alt="${alt}" />`;

  return link
    ? `<a href="${link}">${image}</a>`
    : image;
};

export const generateStatistics = () => {
  return statistics
    .map(generateStatistic)
    .join('\n');
};