import { appEnvironment } from "../configs/environment";

interface LogLevel {
  INFO: number;
  WARN: number;
  ERROR: number;
  [key: string]: number;
}

const logLevel: LogLevel = {
  INFO: 1,
  WARN: 2,
  ERROR: 3,
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
