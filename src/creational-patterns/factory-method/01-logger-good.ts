import {
  AnotherLogger,
  ConsoleLogger,
  DatabaseLogger,
  DeviceLogger,
  FileLogger,
  Logger,
} from "./01-logger-bad";

interface LoggerFactory {
  createLogger(): Logger;
}

class ConsoleLoggerFactory implements LoggerFactory {
  createLogger(): Logger {
    return new ConsoleLogger();
  }
}

class FileLoggerFactory implements LoggerFactory {
  createLogger(): Logger {
    return new FileLogger();
  }
}

class DatabaseLoggerFactory implements LoggerFactory {
  createLogger(): Logger {
    return new DatabaseLogger();
  }
}

class AnotherLoggerFactory implements LoggerFactory {
  createLogger(): Logger {
    return new AnotherLogger();
  }
}

class DeviceLoggerFactory implements LoggerFactory {
  createLogger(): Logger {
    return new DeviceLogger();
  }
}

function clientCode(loggerFactory: LoggerFactory, message: string) {
  const logger = loggerFactory.createLogger();
  logger.log(message);
}

export default function run() {
  clientCode(new ConsoleLoggerFactory(), "This is a console log message.");
  clientCode(new FileLoggerFactory(), "This is a file log message.");
  clientCode(new DatabaseLoggerFactory(), "This is a database log message.");
  clientCode(new AnotherLoggerFactory(), "This is another log message.");
  clientCode(new DeviceLoggerFactory(), "This is a device log message.");
}
