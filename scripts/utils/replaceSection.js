export const replaceSection = (content, section, generatedContent) => {
  const startMarker = `<!-- START:${section} -->`;
  const endMarker = `<!-- END:${section} -->`;

  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error(
      `Markers for "${section}" section were not found in README.md.`,
    );
  }

  if (startIndex >= endIndex) {
    throw new Error(
      `Invalid markers order for "${section}" section.`,
    );
  }

  const contentStart = startIndex + startMarker.length;

  return (
    content.slice(0, contentStart) +
    `\n${generatedContent}\n` +
    content.slice(endIndex)
  );
};