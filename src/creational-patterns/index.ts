import badLogger from "./factory-method/01-logger-bad";
import goodLogger from "./factory-method/01-logger-good";
import badNotification from "./factory-method/02-notification-bad";
import goodNotification from "./factory-method/02-notification-good";
import goodSekiroBosses from "./factory-method/03-sekiro-bosses-good";
import badFileExporter from "./factory-method/04-file-exporter-bad";
import goodFileExporter from "./factory-method/04-file-exporter-good";

const creationalPatterns = {
  factoryMethod: {
    logger: {
      bad: badLogger,
      good: goodLogger,
    },
    notification: {
      bad: badNotification,
      good: goodNotification,
    },
    sekiroBosses: {
      good: goodSekiroBosses,
    },
    fileExporter: {
      bad: badFileExporter,
      good: goodFileExporter,
    },
  },
};

export default creationalPatterns;
