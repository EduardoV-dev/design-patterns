// BAD: tightly-coupled notification dispatcher that directly calls specific handlers.
// This is the file you should refactor into a NotificationCenter (Observer with topics).

export type Topic = "order.created" | "order.shipped" | "user.signedUp";

export interface Notification {
  topic: Topic;
  payload: any;
  timestamp: number;
}

// Concrete handlers called directly (bad)
export function sendEmail(notification: Notification) {
  console.log(`[email] ${notification.topic} ->`, notification.payload);
}

export function sendPush(notification: Notification) {
  console.log(`[push] ${notification.topic} ->`, notification.payload);
}

export function writeAudit(notification: Notification) {
  console.log(`[audit] ${notification.topic} ->`, notification.payload);
}

// Bad publisher that knows about concrete handlers and topics
export class NotificationPublisher {
  publish(notification: Notification) {
    if (notification.topic === "order.created") {
      sendEmail(notification);
      writeAudit(notification);
    } else if (notification.topic === "order.shipped") {
      sendPush(notification);
      writeAudit(notification);
    } else if (notification.topic === "user.signedUp") {
      sendEmail(notification);
    } else {
      throw new Error("Unknown topic");
    }
  }
}

export default function run() {
  const pub = new NotificationPublisher();
  const now = Date.now();

  pub.publish({
    topic: "order.created",
    payload: { orderId: 123 },
    timestamp: now,
  });
  pub.publish({
    topic: "order.shipped",
    payload: { orderId: 123 },
    timestamp: now + 1000,
  });
  pub.publish({
    topic: "user.signedUp",
    payload: { userId: "u1" },
    timestamp: now + 2000,
  });
}
