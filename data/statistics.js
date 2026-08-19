import { config } from './config.js';

export const statistics = [
  {
    type: 'github-stats',
    endpoint: 'https://github-readme-stats-fast.vercel.app/api',
    params: {
      show_icons: true,
      show: 'prs_merged_percentage',
    },
    link: 'https://github.com/pranesh-2005/github-readme-stats-fast',
    alt: 'GitHub Stats',
  },

  {
    type: 'github-streak',
    endpoint: 'https://github-readme-stats-fast.vercel.app/api/streak',
    params: {
      date_format: 'j M[ Y]',
      card_width: 420,
      starting_year: 2024,
    },
    link: 'https://github.com/pranesh-2005/github-readme-stats-fast',
    alt: 'GitHub Streak',
  },

  {
    type: 'github-trophies',
    endpoint: 'https://github-profile-stats-rho.vercel.app/api/profile',
    params: {
      mode: 'unreal',
      animation: 'on',
      showHidden: true,
    },
    link: 'https://github.com/VaradScript/github-profile-svg',
    alt: 'GitHub Trophies',
  },

  {
    type: 'top-languages',
    endpoint: 'https://github-readme-stats-fast.vercel.app/api/top-langs/',
    params: {
      hide: 'Jupyter Notebook,go,smarty,groovy,hcl',
      layout: 'compact',
      langs_count: 20,
      exclude_repo: 'Ukraine-in-heart,mimino',
    },
    link: 'https://github.com/Pranesh-2005/github-readme-stats',
    alt: 'Top Languages',
  },
];