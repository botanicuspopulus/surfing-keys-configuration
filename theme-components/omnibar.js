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
