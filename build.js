const fs = require("fs");
const path = require("path");

const BUILD_CONFIG = {
  inputFiles: [
    "theme-config.js",
    "theme-utils.js",
    "settings.js",
    "theme-components/palette.js",
    "theme-components/base-theme.js",
    "theme-components/ace-editor.js",
    "theme-components/keystroke.js",
    "theme-components/omnibar.js",
    "theme-components/tabs.js",
    "hints-config.js",
    "keymaps.js",
    "conf.js",
  ],
  outputFile: "surfing-keys-config.js",
  watch: false,
};

class SurfingKeysConfigBuilder {
  constructor(config) {
    this.config = config;
  }

  generateHeader() {
    return `// Surfing Keys Configuration
// Built on ${new Date().toISOString()}
// Sources: \n// - ${this.config.inputFiles.join(",\n// - ")}
// Auto-generated - Do not edit!

`;
  }

  wrapFileContents(filename, content) {
    return `// ========== ${filename} ==========
${content}

`;
  }

  writeOutput(content) {
    try {
      fs.writeFileSync(this.config.outputFile, content);
      console.log("Done!");
    } catch (error) {
      console.error(`Error writing output file: ${error.message}`);
      process.exit(1);
    }
  }

  build() {
    console.log("Building Surfing Keys Configuration...");

    let output = this.generateHeader();

    this.config.inputFiles.forEach((file) => {
      if (!fs.existsSync(file)) {
        console.warn(`Warning: ${file} not found, skipping...`);
        return;
      }

      console.log(`Adding ${file}...`);
      output += `// ========== ${file} ==========\n`;

      try {
        const content = fs.readFileSync(file, "utf8");
        output += content;
      } catch (error) {
        console.error(`Error reading ${file}: ${error.message}`);
        process.exit(1);
      }
    });

    fs.writeFileSync("surfing-keys-config.js", output);
    console.log("Done!");
  }

  watch() {
    console.log("Watching for changes...");

    this.config.inputFiles.forEach((file) => {
      if (fs.existsSync(file)) {
        fs.watchFile(file, (curr, prev) => {
          console.log(`File ${file} changed, rebuilding...`);
          this.build();
        });
      }
    });
  }
}

const args = process.argv.slice(2);

if (args.includes("--watch")) {
  BUILD_CONFIG.watch = true;
}

const builder = new SurfingKeysConfigBuilder(BUILD_CONFIG);
builder.build();

if (BUILD_CONFIG.watch) {
  builder.watch();
}
