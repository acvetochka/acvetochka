/**
 * Project category:
 *
 * @property {string} title - Category title displayed in the README. Required.
 * @property {Project[]} items - Projects included in this category. Required.
 *
 * Project:
 *
 * @property {string} name - Project name displayed in the README. Required.
 * @property {string} repository - GitHub repository name. Required.
 * @property {string} owner - GitHub repository owner. Optional.
 *   Defaults to config.githubOwner when omitted.
 * @property {number} descriptionLines - Number of repository description
 *   lines displayed on the project card. Optional.
 */

export const projects = {
  teamProjects: {
    title: '💡 Team-projects',
    items: [
      {
        name: 'Smile Bar',
        repository: 'smile_bar',
      },
      {
        name: 'Goose-track-project',
        repository: 'goose-track-project',
      },
      {
        name: 'Project Bookshelf',
        repository: 'project-bookshelf',
        descriptionLines: 3,
      },
      {
        name: 'Mimino',
        repository: 'mimino',
        descriptionLines: 3,
      },
    ],
  },

  websites: {
    title: '💡 Websites / Landings',
    items: [
      {
        name: 'Portfolio',
        repository: 'portfolio',
        descriptionLines: 3,
      },
      {
        name: 'Carp Travel',
        repository: 'carp-travel',
        descriptionLines: 3,
      },
      {
        name: 'Car Rental',
        repository: 'car-rental',
        descriptionLines: 3,
      },
      {
        name: 'WebStudio',
        repository: 'WebStudio',
        descriptionLines: 3,
      },
      {
        name: 'Resume',
        repository: 'Resume',
        descriptionLines: 3,
      },
    ],
  },

  apps: {
    title: '💡 Apps',
    items: [
      {
        name: 'Phonebook',
        repository: 'Phonebook',
        descriptionLines: 3,
      },
      {
        name: 'Tetris',
        repository: 'tetris',
        descriptionLines: 3,
      },
      {
        name: 'Search Movies',
        repository: 'search-movies',
        descriptionLines: 3,
      },
      {
        name: 'Fullstack Test',
        repository: 'fullstackTest',
        descriptionLines: 3,
      },
      {
        name: 'Image Search',
        repository: 'ImageSearch',
        descriptionLines: 3,
      },
      {
        name: 'Weather App',
        repository: 'weather-app',
        descriptionLines: 3,
      },
    ],
  },
};