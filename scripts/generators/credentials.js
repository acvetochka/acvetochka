import { credentials } from '../../data/credentials.js';
import { generateBadgeUrl } from '../utils/generateBadgeUrl.js';

const generateCredential = (credential) => {
  const badgeUrl = generateBadgeUrl(credential.badge);

  return `<a href="${credential.url}" target="_blank">![${credential.name}](${badgeUrl})</a>`;
};

export const generateCredentials = () => {
  return credentials
    .map(generateCredential)
    .join('\n');
};