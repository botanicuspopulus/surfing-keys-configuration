const {
  map,
  unmap,
  mapkey,
  unmapkey,
  removeSearchAlias,
  Front,
  Hints,
  Visual,
} = api;

applySettings();
applyKeyMappings();

const prefix = getPrefix();
const variant = THEME_CONFIG.variant;
const enable_shadows = THEME_CONFIG.enable_shadows;
const font_size = THEME_CONFIG.font_size;

settings.theme = `
${convertToCssVars(prefix, PALETTES[variant])}
${getBaseTheme(prefix, font_size, enable_shadows)}
${getAceTheme(prefix)}
${getTabsTheme(prefix, font_size, enable_shadows)}
${getOmnibarTheme(prefix, font_size, enable_shadows)}
${getKeystrokeTheme(prefix, enable_shadows)}
`;

applyHintsConfig(PALETTES[variant], font_size);
