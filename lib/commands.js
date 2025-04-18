const fs = require("fs-extra");
const path = require("path");
const Eleventy = require("@11ty/eleventy");
const chalk = require("chalk");

// 1) init: copy template → cwd/<name>
async function initCmd(name) {
  const target = path.join(process.cwd(), name);
  await fs.copy(path.join(__dirname, "../templates/default"), target);
  console.log(chalk.green(`Created new site at ${name}/`));
  console.log("→ cd", name, "&& npm install");
}

// 2) build: run Eleventy programmatically
async function buildCmd() {
  let elev = new Eleventy(process.cwd(), path.join(process.cwd(), "_site"));
  await elev.write();
  console.log(chalk.blue("✔  Site built to _site/"));
}

// 3) serve: Eleventy --serve
async function serveCmd() {
  let elev = new Eleventy(process.cwd(), path.join(process.cwd(), "_site"), {
    serve: true, watch: true, port: 8080
  });
  await elev.write();
}
module.exports = { initCmd, buildCmd, serveCmd };
