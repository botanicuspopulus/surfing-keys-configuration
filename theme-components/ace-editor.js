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
