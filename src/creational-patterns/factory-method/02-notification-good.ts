import {
  EmailNotifier,
  Notifier,
  PushNotifier,
  SmsNotifier,
} from "./02-notification-bad";

interface NotifierFactory {
  create(): Notifier;
}

class EmailNotifierFactory implements NotifierFactory {
  create(): Notifier {
    return new EmailNotifier();
  }
}

class SmsNotifierFactory implements NotifierFactory {
  create(): Notifier {
    return new SmsNotifier();
  }
}

class PushNotifierFactory implements NotifierFactory {
  create(): Notifier {
    return new PushNotifier();
  }
}

function notify(channel: NotifierFactory, to: string, message: string) {
  const notifier = channel.create();
  notifier.send(to, message);
}

export default function run() {
  // Example usage:
  notify(new EmailNotifierFactory(), "alice@example.com", "Hello Alice");
  notify(new SmsNotifierFactory(), "+12345678", "Short SMS");
  notify(new PushNotifierFactory(), "device-abc", "You've got a notification");
}
