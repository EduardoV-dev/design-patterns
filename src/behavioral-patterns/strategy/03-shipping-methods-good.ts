interface ShippingStrategy {
  calculateShipping(weightKg: number, distanceKm: number): number;
}

class StandardStrategy implements ShippingStrategy {
  calculateShipping(weightKg: number, distanceKm: number): number {
    const cost = 5 + weightKg * 1.0 + distanceKm * 0.05;
    console.log(`Standard shipping cost: $${cost.toFixed(2)}`);
    return cost;
  }
}

class ExpressStrategy implements ShippingStrategy {
  calculateShipping(weightKg: number, distanceKm: number): number {
    const cost = 10 + weightKg * 1.5 + distanceKm * 0.1;
    console.log(`Express shipping cost: $${cost.toFixed(2)}`);
    return cost;
  }
}

class OvernightStrategy implements ShippingStrategy {
  calculateShipping(weightKg: number, distanceKm: number): number {
    const cost = 20 + weightKg * 3.0 + distanceKm * 0.25;
    console.log(`Overnight shipping cost: $${cost.toFixed(2)}`);
    return cost;
  }
}

class ShippingContext {
  constructor(private strategy: ShippingStrategy) {}

  setShippingStrategy(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  calculateShipping(weightKg: number, distanceKm: number): number {
    return this.strategy.calculateShipping(weightKg, distanceKm);
  }
}

/**
 * Simple shipping cost examples:
 * - standard: base $5 + $1 per kg + $0.05 per km
 * - express: base $10 + $1.5 per kg + $0.1 per km
 * - overnight: base $20 + $3 per kg + $0.25 per km
 */

// Central function that picks algorithm with conditionals (violates open/closed)
export function calculateShipping(
  shippingContext: ShippingContext,
  weightKg: number,
  distanceKm: number,
): number {
  return shippingContext.calculateShipping(weightKg, distanceKm);
}

export default function run() {
  const ctx = new ShippingContext(new StandardStrategy());
  calculateShipping(ctx, 2.5, 100); // example output

  ctx.setShippingStrategy(new ExpressStrategy());
  calculateShipping(ctx, 1.2, 50);

  ctx.setShippingStrategy(new OvernightStrategy());
  calculateShipping(ctx, 0.5, 10);
}
