import { credentials } from '../../data/credentials.js';
import { generateBadgeUrl } from '../utils/generateBadgeUrl.js';

const generateCredential = ({
  name,
  url,
  badge,
  breakAfter = false,
}) => {
  const badgeUrl = generateBadgeUrl(badge);

  return `<a href="${url}" target="_blank">![${name}](${badgeUrl})</a>${breakAfter ? '<br/>' : ''
    }`;
};

export const generateCredentials = () => {
  return credentials
    .map(generateCredential)
    .join('\n');
};