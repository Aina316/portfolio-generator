#!/usr/bin/env node
const { Command } = require("commander");
const pkg = require("../package.json");
const { initCmd, buildCmd, serveCmd } = require("../lib/commands");
const program = new Command();

program.name("spg").version(pkg.version);
program
  .command("init <name>")
  .description("Generate a new portfolio site")
  .action(initCmd);
program.command("build").description("Build static site").action(buildCmd);
program.command("serve").description("Serve locally").action(serveCmd);
program.parse(process.argv);
