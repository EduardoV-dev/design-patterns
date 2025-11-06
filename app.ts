import patterns from "./src";

const main = () => {
  // patterns.factoryMethod.logger.bad();
  // patterns.factoryMethod.logger.good();

  // patterns.factoryMethod.notification.bad();
  // patterns.factoryMethod.notification.good();

  // patterns.factoryMethod.sekiroBosses.good();

  // patterns.factoryMethod.fileExporter.bad();
  // patterns.factoryMethod.fileExporter.good();

  // patterns.behavioral.strategy.paymentMethods.bad();
  // patterns.behavioral.strategy.paymentMethods.good();

  // patterns.behavioral.strategy.imageFilters.bad();
  // patterns.behavioral.strategy.imageFilters.good();

  patterns.behavioral.strategy.shipping.bad();
  patterns.behavioral.strategy.shipping.good();
};

main();
