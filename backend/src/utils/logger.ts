import { appEnvironment } from "../configs/environment";

interface LogLevel {
  DEBUG: number;
  INFO: number;
  WARN: number;
  ERROR: number;
  [key: string]: number;
}

const logLevel: LogLevel = {
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
};

const fontColors = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};

const logger = {
  debug(...message: any[]) {
    if (logLevel.DEBUG >= logLevel[appEnvironment.appLogLevel]) {
      console.info(fontColors.cyan, "debug\t", fontColors.white, ...message);
    }
  },
  info(...message: any[]) {
    if (logLevel.INFO >= logLevel[appEnvironment.appLogLevel]) {
      console.info(fontColors.blue, "info \t", fontColors.white, ...message);
    }
  },
  warn(...message: any[]) {
    if (logLevel.WARN >= logLevel[appEnvironment.appLogLevel]) {
      console.warn(fontColors.yellow, "warn \t", fontColors.white, ...message);
    }
  },
  error(...message: any[]) {
    if (logLevel.ERROR >= logLevel[appEnvironment.appLogLevel]) {
      console.error(fontColors.red, "error\t", fontColors.white, ...message);
    }
  },
};

export default logger;
