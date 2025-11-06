// Unrefactored: chooses shipping cost calculation with conditionals.
// This is the file you will refactor to use the Strategy pattern.

export type ShippingMethod = "standard" | "express" | "overnight";

/**
 * Simple shipping cost examples:
 * - standard: base $5 + $1 per kg + $0.05 per km
 * - express: base $10 + $1.5 per kg + $0.1 per km
 * - overnight: base $20 + $3 per kg + $0.25 per km
 */

// Central function that picks algorithm with conditionals (violates open/closed)
export function calculateShipping(
  method: ShippingMethod,
  weightKg: number,
  distanceKm: number,
): number {
  if (method === "standard") {
    const cost = 5 + weightKg * 1.0 + distanceKm * 0.05;
    console.log(`Standard shipping cost: $${cost.toFixed(2)}`);
    return cost;
  }

  if (method === "express") {
    const cost = 10 + weightKg * 1.5 + distanceKm * 0.1;
    console.log(`Express shipping cost: $${cost.toFixed(2)}`);
    return cost;
  }

  if (method === "overnight") {
    const cost = 20 + weightKg * 3.0 + distanceKm * 0.25;
    console.log(`Overnight shipping cost: $${cost.toFixed(2)}`);
    return cost;
  }

  throw new Error("Unsupported shipping method");
}

export default function run() {
  calculateShipping("standard", 2.5, 100); // example output
  calculateShipping("express", 1.2, 50);
  calculateShipping("overnight", 0.5, 10);
}
