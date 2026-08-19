import { contacts } from '../../data/contacts.js';
import { generateBadgeUrl } from '../utils/generateBadgeUrl.js';

export const generateContacts = () => {
  return contacts
    .map((contact) => {
      if (contact.type === 'link') {
        return `<div><a href="${contact.url}" target="_blank" title="${contact.name}">${contact.name}</a></div></br>`;
      }

      const badgeUrl = generateBadgeUrl(contact.badge);

      return `<a href="${contact.url}" target="_blank" title="${contact.name}">![${contact.name}](${badgeUrl})</a>`;
    })
    .join('\n');
};