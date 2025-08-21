api.map('H', 'S');
api.map('L', 'D');
api.map('J', 'R');
api.map('K', 'E');
api.map('<Space>bn', 'R');
api.map('<Space>bp', 'E');
api.map('<Space>bc', 'gxx');
api.map('<Space>bl', 'gx0');
api.map('<Space>br', 'gx$');
api.map('<Space>bb', 'T');
api.map('<Space>|', 'W');
api.map('<Space>c', 'x');
api.map('<Space>n', 'on');
api.map('F', 'gf');




api.mapkey('<Space>fb', 'Choose tab with omnibar', function() {
  api.Front.openOmnibar({type: "Tabs"});  
});


api.removeSearchAlias('g');
api.unmap('og');
api.removeSearchAlias('b');
api.unmap('ob');
api.removeSearchAlias('w');
api.unmap('ow');
api.removeSearchAlias('s');
api.unmap('os');


api.unmap('<Ctrl-6>');
api.unmap('<Ctrl-p>');
api.unmap('<Ctrl-n>');


settings.tabsThreshold = 9;
settings.hintAlign = 'left';
settings.omnibarSuggestionTimeout = 500;
settings.richHintsForKeystroke = 1;


// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
