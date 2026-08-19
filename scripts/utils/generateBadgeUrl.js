export const generateBadgeUrl = (badge) => {
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