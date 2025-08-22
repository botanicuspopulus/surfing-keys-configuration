function applyHintsConfig(palette, font_size) {
  Hints.style(`
  font-size: ${font_size};
  border: 2px solid ${palette.mantle};
  color: ${palette.green};
  background: initial;
  background-color: ${palette.surface0} !important;
`);

  Hints.style(
    `
  font-size: ${font_size};
  border: solid 2px ${palette.mantle};
  color: ${palette.teal} !important;
  background: ${palette.surface0};
`,
    "text",
  );
}
