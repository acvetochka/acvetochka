function generateIcon({ icon, title, provider }) {
  const providerConfig = iconProviders[provider];

  if (!providerConfig) {
    return title;
  }

  const src = providerConfig.getUrl(icon);

  return `
    <img
      src="${src}"
      title="${title}"
      alt="${title}"
    />
  `;
}
