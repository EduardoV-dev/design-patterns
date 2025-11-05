// A simple "bad" implementation that uses a switch to create notifiers.

type Channel = "email" | "sms" | "push";

export interface Notifier {
  send(to: string, message: string): void;
}

export class EmailNotifier implements Notifier {
  send(to: string, message: string): void {
    console.log(`Sending EMAIL to ${to}: ${message}`);
  }
}

export class SmsNotifier implements Notifier {
  send(to: string, message: string): void {
    console.log(`Sending SMS to ${to}: ${message}`);
  }
}

export class PushNotifier implements Notifier {
  send(to: string, message: string): void {
    console.log(`Sending PUSH to ${to}: ${message}`);
  }
}

// Central function that constructs notifiers with a switch (violates open/closed)
function createNotifier(channel: Channel): Notifier {
  switch (channel) {
    case "email":
      return new EmailNotifier();
    case "sms":
      return new SmsNotifier();
    case "push":
      return new PushNotifier();
    default:
      throw new Error("Unsupported channel");
  }
}

function notify(channel: Channel, to: string, message: string) {
  const notifier = createNotifier(channel);
  notifier.send(to, message);
}

export default function run() {
  // Example usage:
  notify("email", "alice@example.com", "Hello Alice");
  notify("sms", "+12345678", "Short SMS");
  notify("push", "device-abc", "You've got a notification");
}
