/**
 * Credential:
 *
 * @property {string} name - Platform name displayed in the README. Required.
 * @property {string} url - Link to the profile or achievements. Required.
 * @property {object} badge - Badge configuration. Required.
 * @property {string} badge.label - Badge label. Required when using Shields.io.
 * @property {string} badge.color - Badge background color. Required when using Shields.io.
 * @property {string} badge.logo - Shields.io logo name. Optional.
 * @property {string} badge.logoColor - Logo color. Optional.
 * @property {string} badge.url - Custom badge URL. Optional.
 */
export const credentials = [
  {
    name: 'Codewars',
    url: 'https://www.codewars.com/users/acvetochka',
    badge: {
      url: 'https://www.codewars.com/users/acvetochka/badges/small',
    },
    breakAfter: true,
  },
  {
    name: 'Cloud Skills Boost',
    url: 'https://www.cloudskillsboost.google/public_profiles/3df8c2a4-5937-47cd-9e6f-8be8c5e95deb',
    badge: {
      label: 'Cloud_Skills_Boost',
      color: '1a73e8',
    },
  },
  {
    name: 'Credly',
    url: 'https://www.credly.com/users/lona-kuznietsova',
    badge: {
      label: 'Credly',
      color: 'ff6a00',
    },
  },
  {
    name: 'Microsoft Learn',
    url: 'https://learn.microsoft.com/en-us/users/alonakuznietsova-7556/achievements',
    badge: {
      label: 'Microsoft_Learn',
      color: '258ffa',
      logo: 'microsoft',
      logoColor: 'white',
    },
  },
];