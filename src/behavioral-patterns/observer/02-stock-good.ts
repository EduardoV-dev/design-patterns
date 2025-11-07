import { PriceUpdate } from "./02-stock-bad";

const ENABLE_AUDIT_LOG = true;

interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(update: PriceUpdate): void;
}

interface Observer {
  update(data: PriceUpdate): void;
}

class StockExchangeSubject implements Subject {
  private subscribers = new Set<Observer>();

  subscribe(observer: Observer): void {
    this.subscribers.add(observer);
  }

  unsubscribe(observer: Observer): void {
    this.subscribers.delete(observer);
  }

  notify(update: PriceUpdate): void {
    const snapshot = Array.from(this.subscribers);

    snapshot.forEach((subscriber) => {
      try {
        subscriber.update(update);
      } catch (error) {
        console.error("There was an error updating the price");
      }
    });
  }

  updatePrice(update: PriceUpdate): void {
    this.notify(update);
  }
}

class ConsoleDisplayerObserver implements Observer {
  update(update: PriceUpdate): void {
    console.log(
      `ConsolePrice: ${update.ticker} = $${update.price} @ ${new Date(update.timestamp).toISOString()}`,
    );
  }
}

class ChartDisplayerObserver implements Observer {
  update(update: PriceUpdate): void {
    console.log(`Chart -> ${update.ticker}: plotting price ${update.price}`);
  }
}

class AuditLogDisplayerObserver implements Observer {
  update(update: PriceUpdate): void {
    if (!ENABLE_AUDIT_LOG) return;

    console.log(
      `AuditLog: ${update.ticker} ${update.price} (${update.timestamp})`,
    );
  }
}

export default function run() {
  const now = Date.now();
  const exchange = new StockExchangeSubject();

  exchange.subscribe(new ConsoleDisplayerObserver());
  exchange.subscribe(new ChartDisplayerObserver());
  exchange.subscribe(new AuditLogDisplayerObserver());

  exchange.updatePrice({ ticker: "AAPL", price: 189.23, timestamp: now });
  exchange.updatePrice({
    ticker: "GOOG",
    price: 3420.5,
    timestamp: now + 1000,
  });
}
