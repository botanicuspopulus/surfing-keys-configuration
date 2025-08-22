const THEME_CONFIG = {
  variant: "macchiato", // latte, frappe, mocha
  enable_shadows: false,
  font_size: "14pt",
};

function getPrefix() {
  return `sk-${THEME_CONFIG.variant}`;
}
