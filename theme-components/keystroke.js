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
