import { credentials } from '../../data/credentials.js';

const generateBadgeUrl = (badge) => {
  if (badge.url) {
    return badge.url;
  }

  const params = new URLSearchParams({
    style: 'for-the-badge',
  });

  if (badge.logo) {
    params.set('logo', badge.logo);
  }

  if (badge.logoColor) {
    params.set('logoColor', badge.logoColor);
  }

  return `https://img.shields.io/badge/${badge.label}-${badge.color}?${params}`;
};


const generateCredential = (credential) => {
  const badgeUrl = generateBadgeUrl(credential.badge);

  return `<a href="${credential.url}" target="_blank">![${credential.name}](${badgeUrl})</a>`;
};

export const generateCredentials = () => {
  return credentials
    .map(generateCredential)
    .join('\n');
};