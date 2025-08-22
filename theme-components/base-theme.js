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
