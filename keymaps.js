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
