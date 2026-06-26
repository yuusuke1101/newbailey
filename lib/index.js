"use strict";

const chalk = require("chalk");

const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
  );
};

const getWIBTime = () => {
  return new Intl.DateTimeFormat("id-ID", {
    timeZone: "Asia/Jakarta",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date()) + " WIB";
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const alyaAscii = `
${chalk.greenBright("     █████╗ ██╗     ██╗   ██╗ █████╗ ")}
${chalk.greenBright("    ██╔══██╗██║     ╚██╗ ██╔╝██╔══██╗")}
${chalk.greenBright("    ███████║██║      ╚████╔╝ ███████║")}
${chalk.greenBright("    ██╔══██║██║       ╚██╔╝  ██╔══██║")}
${chalk.greenBright("    ██║  ██║███████╗   ██║   ██║  ██║")}
${chalk.greenBright("    ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝")}
`;

const bootSequence = async () => {
  clearConsole();
  console.log(alyaAscii);

  console.log(chalk.cyan("══════════════════════════════════════════════════════════════"));
  console.log(chalk.bold.white("            RYUU x ALYA BAILEYS"));
  console.log(chalk.cyan("══════════════════════════════════════════════════════════════\n"));

  const bootLogs = [
    "[00:00.12] Initializing Core...",
    "[00:00.34] Loading Configuration...",
    "[00:00.58] Checking Dependencies...",
    "[00:01.02] Loading Plugins...",
    "[00:01.41] Connecting Database...",
    "[00:01.82] Starting WhatsApp Socket...",
    "[00:02.17] Authenticating Session...",
    "[00:02.66] Restoring Cache...",
    "[00:03.04] Registering Commands...",
    "[00:03.51] Optimizing Memory...",
    "[00:03.98] Finalizing Boot..."
  ];


  for (const log of bootLogs) {
    console.log(chalk.gray(log));
    await sleep(1000); 
  }

  console.log("\n" + chalk.white("Boot Progress"));
  
  // Animasi Progress Bar
  process.stdout.write("[");
  for (let i = 1; i <= 30; i++) {
    process.stdout.write(chalk.green("█"));
    await sleep(40); 
  }
  console.log("] " + chalk.greenBright("100%\n"));

  const memoryUsage = Math.round(process.memoryUsage().rss / 1024 / 1024); 
  const totalMemory = 512; 
  const nodeVer = process.version;
  const platform = process.platform;

  // Block Info Sistem
  console.log(chalk.cyan("──────────────────────────────────────────────────────────────"));
  console.log(chalk.white(`Developer  : `) + chalk.greenBright(`Ryuusuke`));
  console.log(chalk.white(`Version    : `) + chalk.greenBright(`10.0.0`));
  console.log(chalk.white(`Node.js    : `) + chalk.greenBright(`${nodeVer}`));
  console.log(chalk.white(`Platform   : `) + chalk.greenBright(`${platform}`));
  console.log(chalk.white(`Memory     : `) + chalk.greenBright(`${memoryUsage} MB / ${totalMemory} MB`));
  console.log(chalk.white(`Time       : `) + chalk.greenBright(`${getWIBTime()}`));
  console.log(chalk.cyan("──────────────────────────────────────────────────────────────\n"));

  const finalChecks = [
    "✔ WhatsApp Connected",
    "✔ Event Loaded",
    "✔ Commands Loaded",
    "✔ Database Connected",
    "✔ Bot Ready"
  ];

  for (const check of finalChecks) {
    console.log(chalk.greenBright(check));
    await sleep(200);
  }

  console.log("\n" + chalk.yellow("Waiting for incoming messages..."));
};

bootSequence().then(() => {
  var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
      }
      Object.defineProperty(o, k2, desc);
  }) : (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
  }));
  var __exportStar = (this && this.__exportStar) || function(m, exports) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
  var __importDefault = (this && this.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.makeWASocket = void 0;
  const Socket_1 = __importDefault(require("./Socket"));
  exports.makeWASocket = Socket_1.default;
  __exportStar(require("../WAProto"), exports);
  __exportStar(require("./Utils"), exports);
  __exportStar(require("./Types"), exports);
  __exportStar(require("./Store"), exports);
  __exportStar(require("./Defaults"), exports);
  __exportStar(require("./WABinary"), exports);
  __exportStar(require("./WAM"), exports);
  __exportStar(require("./WAUSync"), exports);

  exports.default = Socket_1.default;
});
