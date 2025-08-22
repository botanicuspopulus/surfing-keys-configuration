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
