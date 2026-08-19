/**
 * Contact:
 *
 * @property {string} name - Contact/platform name. Required.
 * @property {string} url - Profile or contact URL. Required.
 * @property {object} badge - Badge configuration. Required.
 * @property {string} badge.label - Badge label. Required.
 * @property {string} badge.color - Badge color. Required.
 * @property {string} badge.logo - Shields.io logo name. Optional.
 * @property {string} badge.logoColor - Logo color. Optional.
 * @property {string} badge.url - Custom badge URL. Optional.
 */

export const contacts = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alona-kuznietsova/',
    badge: {
      label: 'linkedin',
      color: '0077B5',
      logo: 'linkedin',
      logoColor: 'white',
    },
  },
  {
    name: 'Telegram',
    url: 'https://t.me/acvetochka',
    badge: {
      label: 'Telegram',
      color: '2CA5E0',
      logo: 'telegram',
      logoColor: 'white',
    },
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/30961270693',
    badge: {
      label: 'WhatsApp',
      color: '25D366',
      logo: 'whatsapp',
      logoColor: 'white',
    },
  },
  {
    name: 'Gmail',
    url: 'mailto:acvetochka@gmail.com',
    badge: {
      label: 'Gmail',
      color: 'D14836',
      logo: 'gmail',
      logoColor: 'white',
    },
  },
  {
    name: 'Get in IT',
    url: 'https://www.get-in-it.de/profil/JZNjS79xsiXUeN4VeAzYw1I70sSQY1mZ',
    badge: {
      label: 'Get_in_IT',
      color: '6eab1b6',
    },
  },
  {
    name: 'My Resume',
    url: 'https://resume.kuznietsova.org',
    type: 'link',
  }
];