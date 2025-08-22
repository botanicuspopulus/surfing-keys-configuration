function convertToCssVars(prefix, palette) {
  return `:root{\n${Object.entries(palette)
    .map(([colour, value]) => `\t--${prefix}-${colour}: ${value};`)
    .join("\n")}\n}`;
}
