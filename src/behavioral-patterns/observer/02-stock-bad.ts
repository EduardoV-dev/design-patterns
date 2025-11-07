// BAD: StockExchange directly calls concrete display/logging functions.
// You will refactor this to use Observer pattern.

export type Ticker = string;

export interface PriceUpdate {
  ticker: Ticker;
  price: number;
  timestamp: number; // epoch ms
}

// Concrete display/logging functions that StockExchange calls directly
export function displayConsolePrice(update: PriceUpdate) {
  console.log(
    `ConsolePrice: ${update.ticker} = $${update.price} @ ${new Date(update.timestamp).toISOString()}`,
  );
}

export function displayChart(update: PriceUpdate) {
  console.log(`Chart -> ${update.ticker}: plotting price ${update.price}`);
}

export function auditLog(update: PriceUpdate) {
  console.log(
    `AuditLog: ${update.ticker} ${update.price} (${update.timestamp})`,
  );
}

// BAD: StockExchange directly knows and calls each display/logger.
// Refactor so StockExchange becomes a Subject and displays become Observers.
export class StockExchange {
  updatePrice(update: PriceUpdate) {
    // direct calls - tightly coupled
    displayConsolePrice(update);
    displayChart(update);

    const enableAudit = true;
    if (enableAudit) {
      auditLog(update);
    }
  }
}

export default function run() {
  const exchange = new StockExchange();
  const now = Date.now();
  exchange.updatePrice({ ticker: "AAPL", price: 189.23, timestamp: now });
  exchange.updatePrice({
    ticker: "GOOG",
    price: 3420.5,
    timestamp: now + 1000,
  });
}
