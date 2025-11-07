import { Notification } from "./03-notification-bad";

interface Observer {
  update(notification: Notification): void;
}

interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(notification: Notification): void;
}

class NotificationSubject implements Subject {
  private subscribers = new Set<Observer>();

  subscribe(observer: Observer): void {
    this.subscribers.add(observer);
  }

  unsubscribe(observer: Observer): void {
    this.subscribers.delete(observer);
  }

  notify(notification: Notification): void {
    const snapshot = Array.from(this.subscribers);

    snapshot.forEach((subscriber) => {
      try {
        subscriber.update(notification);
      } catch (error) {
        console.error("There was an error notifying the subscriber");
      }
    });
  }
}

class EmailNotificationObserver implements Observer {
  update(notification: Notification): void {
    console.log(`[email] ${notification.topic} ->`, notification.payload);
  }
}

class PushNotificationObserver implements Observer {
  update(notification: Notification): void {
    console.log(`[push] ${notification.topic} ->`, notification.payload);
  }
}

class AuditLogNotificationObserver implements Observer {
  update(notification: Notification): void {
    console.log(`[audit] ${notification.topic} ->`, notification.payload);
  }
}

export default function run() {
  const now = Date.now();

  const orderCreatedPublisher = new NotificationSubject();

  orderCreatedPublisher.subscribe(new EmailNotificationObserver());
  orderCreatedPublisher.subscribe(new AuditLogNotificationObserver());
  orderCreatedPublisher.notify({
    topic: "order.created",
    payload: { orderId: 123 },
    timestamp: now,
  });

  const orderShippedPublisher = new NotificationSubject();

  orderShippedPublisher.subscribe(new PushNotificationObserver());
  orderShippedPublisher.subscribe(new AuditLogNotificationObserver());
  orderShippedPublisher.notify({
    topic: "order.shipped",
    payload: { orderId: 123 },
    timestamp: now + 1000,
  });

  const orderSignedUpPublisher = new NotificationSubject();

  orderSignedUpPublisher.subscribe(new EmailNotificationObserver());
  orderSignedUpPublisher.notify({
    topic: "user.signedUp",
    payload: { userId: "u1" },
    timestamp: now + 2000,
  });
}
