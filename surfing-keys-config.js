// Surfing Keys Configuration
// Built on 2025-08-22T17:58:15.978Z
// Sources: 
// - theme-config.js,
// - theme-utils.js,
// - settings.js,
// - theme-components/palette.js,
// - theme-components/base-theme.js,
// - theme-components/ace-editor.js,
// - theme-components/keystroke.js,
// - theme-components/omnibar.js,
// - theme-components/tabs.js,
// - hints-config.js,
// - keymaps.js,
// - conf.js
// Auto-generated - Do not edit!

// ========== theme-config.js ==========
const THEME_CONFIG = {
  variant: "macchiato", // latte, frappe, mocha
  enable_shadows: false,
  font_size: "14pt",
};

function getPrefix() {
  return `sk-${THEME_CONFIG.variant}`;
}
// ========== theme-utils.js ==========
function convertToCssVars(prefix, palette) {
  return `:root{\n${Object.entries(palette)
    .map(([colour, value]) => `\t--${prefix}-${colour}: ${value};`)
    .join("\n")}\n}`;
}
// ========== settings.js ==========
function applySettings() {
  // omnibar settings
  settings.omnibarSuggestion = true;
  settings.focusFirstCandidate = true;
  settings.omnibarSuggestionTimeout = 500;

  settings.tabsThreshold = 100;
  settings.hintAlign = "left";
  settings.richHintsForKeystroke = 1;
  settings.defaultSearchEngine = "d";
  settings.focusAfterClosed = "last";
}
// ========== theme-components/palette.js ==========
const PALETTES = {
  latte: {
    rosewater: "#dc8a78",
    flamingo: "#dd7878",
    pink: "#ea76cb",
    mauve: "#8839ef",
    red: "#d20f39",
    maroon: "#e64553",
    peach: "#fe640b",
    yellow: "#df8e1d",
    green: "#40a02b",
    teal: "#179299",
    sky: "#04a5e5",
    sapphire: "#209fb5",
    blue: "#1e66f5",
    lavender: "#7287fd",
    text: "#4c4f69",
    subtext1: "#5c5f77",
    subtext0: "#6c6f85",
    overlay2: "#7c7f93",
    overlay1: "#8c8fa1",
    overlay0: "#9ca0b0",
    surface2: "#acb0be",
    surface1: "#bcc0cc",
    surface0: "#ccd0da",
    base: "#eff1f5",
    mantle: "#e6e9ef",
    crust: "#dce0e8",
  },
  frappe: {
    rosewater: "#f2d5cf",
    flamingo: "#eebebe",
    pink: "#f4b8e4",
    mauve: "#ca9ee6",
    red: "#e78284",
    maroon: "#ea999c",
    peach: "#ef9f76",
    yellow: "#e5c890",
    green: "#a6d189",
    teal: "#81c8be",
    sky: "#99d1db",
    sapphire: "#85c1dc",
    blue: "#8caaee",
    lavender: "#babbf1",
    text: "#c6d0f5",
    subtext1: "#b5bfe2",
    subtext0: "#a5adce",
    overlay2: "#949cbb",
    overlay1: "#838ba7",
    overlay0: "#737994",
    surface2: "#626880",
    surface1: "#51576d",
    surface0: "#414559",
    base: "#303446",
    mantle: "#292c3c",
    crust: "#232634",
  },
  macchiato: {
    rosewater: "#f4dbd6",
    peach: "#f5a97f",
    green: "#a6da95",
    blue: "#8aadf4",
    maroon: "#ee99a0",
    pink: "#f5bde6",
    muave: "#c6a0f6",
    yellow: "#eed49f",
    flamingo: "#f0c6c6",
    lavender: "#b7bdf8",
    teal: "#8bd5ca",
    sky: "#91d7e3",
    sapphire: "#7dc4e4",
    lavender: "#b7bdf8",
    text: "#cad3f5",
    subtext1: "#b8c0e0",
    subtext0: "#a5adcb",
    surface2: "#5b6078",
    surface1: "#494d64",
    surface0: "#363a4f",
    overlay2: "#939ab7",
    overlay1: "#8087a2",
    overlay0: "#6e738d",
    base: "#24273a",
    mantle: "#1e2030",
    crust: "#181926",
  },
  mocha: {
    rosewater: "#f5e0dc",
    flamingo: "#f2cdcd",
    pink: "#f5c2e7",
    mauve: "#cba6f7",
    red: "#f38ba8",
    maroon: "#eba0ac",
    peach: "#fab387",
    yellow: "#f9e2af",
    green: "#a6e3a1",
    teal: "#94e2d5",
    sky: "#89dceb",
    sapphire: "#74c7ec",
    blue: "#89b4fa",
    lavender: "#b4befe",
    text: "#cdd6f4",
    subtext1: "#bac2de",
    subtext0: "#a6adc8",
    overlay2: "#9399b2",
    overlay1: "#7f849c",
    overlay0: "#6c7086",
    surface2: "#585b70",
    surface1: "#45475a",
    surface0: "#313244",
    base: "#1e1e2e",
    mantle: "#181825",
    crust: "#11111b",
  },
};
// ========== theme-components/base-theme.js ==========
function getBaseTheme(prefix, font_size, enable_shadows) {
  return `
.sk_theme {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: ${font_size};
  background: var(--${prefix}-base);
  color: var(--${prefix}-text);
}

.sk_theme tbody {
  background: var(--${prefix}-yellow);
}

.sk_theme input {
  color: var(--${prefix}-text);
}

.sk_theme .url {
  color: var(--${prefix}-rosewater);
}

.sk_theme .title {
  color: var(--${prefix}-blue);
  font-weight: bold;
}

.sk_theme .annotation {
  color: var(--${prefix}-maroon);
}

.sk_theme .prompt {
  color: var(--${prefix}-subtext0);
  background-color: var(--${prefix}-surface0);
  border-radius: 10px;
  padding-left: 22px;
  padding-right: 21px;
  font-weight: bold;
  box-shadow: ${enable_shadows ? "1px 3px 5px rgba(0, 0, 0, 0.8)" : "none"};
}

.sk_theme .feature_name {
  color: var(--${prefix}-peach);
}

.sk_theme .separator {
  color: var(--${prefix}-rosewater);
}

#sk_usage, #sk_popup, #sk_editor {
  overflow: auto;
  position: fixed;
  width: 80%;
  max-height: 80%;
  top: 10%;
  left: 10%;
  text-align: left;
  box-shadow: ${enable_shadows ? "0px 30px 50px rgba(0, 0, 0, 0.8)" : "none"};
  z-index: 2147483000;
  padding: 1rem;
  border: 1px solid var(--${prefix}-mantle);
  border-radius: 10px;
}

#sk_status, #sk_find {
  font-size: ${font_size};
  font-weight: bold;
  text-align: center;
  padding-right: 8px;
}

#sk_status span[style*="border-right: 1px solid rgb(153, 153, 153);"] {
  display: none;
}
`;
}
// ========== theme-components/ace-editor.js ==========
function getAceTheme(prefix) {
  return `
.ace_editor {
  background: var(--${prefix}-base) !important;
  color: var(--${prefix}-text) !important;
}

.ace_gutter, .ace_gutter-cell {
  background: var(--${prefix}-base) !important;
  color: var(--${prefix}-text) !important;
}

.ace_cursor {
  color: var(--${prefix}-rosewater) !important;
}

.ace-chrome {
  color: var(--${prefix}-text) !important;
}

.ace-chrome .ace_print-margin, .ace_gutter, .ace_gutter-cell, .ace_dialog {
  background: var(--${prefix}-surface0) !important;
}

.ace_gutter, .ace_dialog {
  color: var(--${prefix}-text) !important; }

.normal-mode .ace_cursor {
  background: var(--${prefix}-rosewater) !important;
  border: var(--${prefix}-rosewater) !important;
}

.ace_marker-layer .ace_selection {
  background: var(--${prefix}-surface0) !important;
}
`;
}
// ========== theme-components/keystroke.js ==========
function getKeystrokeTheme(prefix, enable_shadows) {
  return `
#sk_keystroke {
  padding: 6px;
  position: fixed;
  float: right;
  bottom: 0;
  z-index: 2147483000;
  right: 0;
  background-color: var(--${prefix}-surface0);
  color: #fff;
  border: 1px solid var(--${prefix}-mantle);
  border-radius: 10px;
  margin-bottom: 1rem;
  margin-right: 1rem;
  box-shadow: ${enable_shadows ? "0px 30px 50px rgba(0, 0, 0, 0.8)" : "none"};
}
`;
}
// ========== theme-components/omnibar.js ==========
function getOmnibarTheme(prefix, font_size, enable_shadows) {
  return `
@keyframes show {
  0% {
  transform: translateY(50px);
  opacity: 0;
  }
  100% {
  transform: translateY(0);
  opacity: 1;
  }
}

#sk_omnibar {
  width: 60%;
  left: 20%;
  box-shadow: ${enable_shadows ? "0px 30px 50px rgba(0, 0, 0, 0.8)" : "none"};
  border: 2px solid var(--${prefix}-lavender);
  animation: show 200ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.sk_omnibar_middle {
  top: 15%;
  border-radius: 10px;
}

.sk_theme .omnibar_highlight {
  color: var(--${prefix}-green);
  font-weight: bold;
}

.sk_theme .url .omnibar_highlight {
    color: var(--${prefix}-blue);
}

.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
  background: var(--${prefix}-base);
}

.sk_theme .omnibar_folder {
    border: 1px solid var(--${prefix}-surface0);
    border-radius: 5px;
    color: var(--${prefix}-blue);
}

.sk_theme .omnibar_timestamp {
    color: var(--${prefix}-maroon);
}

.sk_theme .omnibar_visitcount {
    color: var(--${prefix}-sapphire);
}

#sk_omnibarSearchArea {
  border-bottom: 0px solid var(--${prefix}-mantle);
}

.sk_theme #sk_omnibarSearchResult {
  max-height: 60vh;
  overflow: hidden;
  margin: 0rem 0rem;
}

#sk_omnibarSearchResult > ul {
  padding: 1.0em;
}

.sk_theme #sk_omnibarSearchResult ul li {
  margin-block: 0.5rem;
  padding-left: 0.4rem;
}

.sk_theme #sk_omnibarSearchResult > ul > li.focused {
  background: var(--${prefix}-surface0);
  border-color: var(--${prefix}-surface0);
  border-radius: 12px;
  position: relative;
  box-shadow: ${enable_shadows ? "1px 3px 5px rgba(0, 0, 0, 0.8)" : "none"};
}

#sk_omnibarSearchResult > input {
  display: inline-block;
  width: 100%;
  flex: 1;
  font-size: 20px;
  margin-bottom: 0;
  padding: 0px 0px 0px 0.5rem;
  background: transparent;
  border-style: none;
  outline: none;
  padding-left: 18px;
}

#sk_omnibarSearchArea .resultPage {
  display: inline-block;
  font-size: ${font_size};
  font-style: italic;
  width: auto;
}

#sk_omnibarSearchResult > ul > li.window {
  border: 2px solid #c7c7c773;
  border-radius: 8px;
  margin: 4px 0px;
}

#sk_omnibarSearchResult > ul > li.window.focused {
  border: 2px solid #fff;
}
`;
}
// ========== theme-components/tabs.js ==========
function getTabsTheme(prefix, font_size, enable_shadows) {
  return `
#sk_tabs {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  overflow: auto;
  z-index: 2147483000;
  box-shadow: ${enable_shadows ? "0px 30px 50px rgba(0, 0, 0, 0.8)" : "none"};
  margin-left: 1rem;
  margin-top: 1.5rem;
  border: solid 1px var(--${prefix}-mantle);
  border-radius: 15px;
  background-color: var(--${prefix}-surface0);
  padding-top: 10px;
  padding-bottom: 10px;
}

#sk_tabs div.sk_tab {
  vertical-align: bottom;
  justify-items: center;
  border-radius: 0px;
  background: var(--${prefix}-surface0);
  margin: 0px;
  box-shadow: ${enable_shadows ? "0px 0px 0px 0px rgba(245, 245, 245, 0.3)" : "none !important"};
  box-shadow: ${enable_shadows ? "0px 0px 0px 0px rgba(0, 0, 0, 0.8) !important" : "none !important"};
  border-top: solid 0px var(--${prefix}-surface0);
  margin-block: 0rem;
}

#sk_tabs div.sk_tab:not(:has(.sk_tab_hint)) {
  background-color: var(--${prefix}-crust) !important;
  box-shadow: ${enable_shadows ? "1px 3px 5px rgba(0, 0, 0, 0.8) !important" : "none"};
  border: 1px solid var(--${prefix}-mantle);
  border-radius: 20px;
  position: relative;
  z-index: 1;
  margin-left: 1.8rem;
  padding-left: 0;
  margin-right: 0.7rem;
}

#sk_tabs div.sk_tab_title {
  display: inline-block;
  vertical-align: middle;
  font-size: ${font_size};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 5px;
  color: var(--${prefix}-yellow);
}

#sk_tabs.vertical div.sk_tab_hint {
  position: inherit;
  left: 8pt;
  margin-top: 3px;
  border: solid 1px var(--${prefix}-surface0); color: var(--${prefix}-muave); background: initial; background-color: var(--${prefix}-base);
  box-shadow: ${enable_shadows ? "3px 3px 5px rgba(0, 0, 0, 0.8)" : "none"};
}

#sk_tabs.vertical div.sk_tab_wrap {
  display: inline-block;
  margin-left: 0;
  margin-top: 0;
  padding-left: 15px; 
}

#sk_tabs.vertical div.sk_tab_title {
  min-width: 100pt;
  max-width: 20vw;
}
`;
}
// ========== hints-config.js ==========
function applyHintsConfig(palette, font_size) {
  Hints.style(`
  font-size: ${font_size};
  border: 2px solid ${palette.mantle};
  color: ${palette.green};
  background: initial;
  background-color: ${palette.mantle} !important;
`);

  Hints.style(
    `
  font-size: ${font_size};
  border: solid 2px ${palette.mantle};
  color: ${palette.teal} !important;
  background: ${palette.mantle};
`,
    "text",
  );
}
// ========== keymaps.js ==========
const { RUNTIME } = api;

function applyKeyMappings() {
  map("H", "S");
  map("L", "D");
  map("J", "R");
  map("K", "E");
  map("F", "gf");

  const leader = "<Space>";
  map(`${leader}bn`, "R");
  map(`${leader}bp`, "E");
  map(`${leader}bc`, "gxx");
  map(`${leader}bl`, "gx0");
  map(`${leader}br`, "gx$");
  map(`${leader}bb`, "T");
  map(`${leader}|`, "W");
  map(`${leader}c`, "x");
  map(`${leader}n`, "on");
  mapkey(`${leader}fb`, "Choose tab with omnibar", function () {
    Front.openOmnibar({ type: "Tabs" });
  });

  const alias_to_remove = ["g", "b", "w", "s"];
  alias_to_remove.forEach((alias) => removeSearchAlias(alias));
  alias_to_remove.forEach((alias) => unmap(`o${alias}`));
  alias_to_remove.forEach((alias) => unmap(`s${alias}`));

  unmap("<Ctrl-6>");
  unmap("<Ctrl-p>");
  unmap("<Ctrl-n>");
}
// ========== conf.js ==========
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
