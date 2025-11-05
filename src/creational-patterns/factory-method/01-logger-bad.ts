// A simple example WITHOUT the Factory Method pattern: client code decides which concrete logger to create.

export interface Logger {
  log(message: string): void;
}

export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[console] ${message}`);
  }
}

export class FileLogger implements Logger {
  log(message: string): void {
    console.log(`[file] ${message}`);
  }
}

export class DatabaseLogger implements Logger {
  log(message: string): void {
    console.log(`[database] ${message}`);
  }
}

export class AnotherLogger implements Logger {
  log(message: string): void {
    console.log(`[another] ${message}`);
  }
}

export class DeviceLogger implements Logger {
  log(message: string): void {
    console.log(`[device] ${message}`);
  }
}

type LoggerType = "console" | "file" | "database" | "another" | "device";

// Client code directly chooses which logger to construct
// Every time a new logger is needed, this function has to be updated
function getLogger(type: LoggerType): Logger {
  switch (type) {
    case "console":
      return new ConsoleLogger();
    case "file":
      return new FileLogger();
    case "database":
      return new DatabaseLogger();
    case "device":
      return new DeviceLogger();
    default:
      return new AnotherLogger();
  }
}

// Every time a new logger is needed, this function has to be updated
function clientCodeWithoutPattern(type: LoggerType, message: string) {
  const logger = getLogger(type);
  logger.log(message);
}

export default function run() {
  clientCodeWithoutPattern("console", "Hello without Factory");
  // [console] Hello without Factory
  clientCodeWithoutPattern("file", "Hello without Factory");
  // [file] Hello without Factory
  clientCodeWithoutPattern("database", "Hello without Factory");
  // [database] Hello without Factory
  clientCodeWithoutPattern("another", "Hello without Factory");
  // [another] Hello without Factory
  clientCodeWithoutPattern("device", "Hello without Factory");
  // [device] Hello without Factory
}
