import badLogger from "./creational-patterns/factory-method/01-logger-bad";
import goodLogger from "./creational-patterns/factory-method/01-logger-good";
import badNotification from "./creational-patterns/factory-method/02-notification-bad";
import goodNotification from "./creational-patterns/factory-method/02-notification-good";
import goodSekiroBosses from "./creational-patterns/factory-method/03-sekiro-bosses-good";

const patterns = {
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
  },
};

export default patterns;
