interface Notifier {
  notify(message: string): void;
}

class EmailNotifier implements Notifier {
  notify(message: string): void {
    console.log(`Email: ${message}`);
  }
}

class SMSNotifierDecorator implements Notifier {
  private readonly wrapped: Notifier;

  constructor(wrapped: Notifier) {
    this.wrapped = wrapped;
  }

  notify(message: string): void {
    console.log(`SMS: ${message}`);
    this.wrapped.notify(message);
  }
}

class WhatsAppNotifierDecorator implements Notifier {
  private readonly wrapped: Notifier;

  constructor(wrapped: Notifier) {
    this.wrapped = wrapped;
  }

  notify(message: string): void {
    console.log(`WhatsApp: ${message}`);
    this.wrapped.notify(message);
  }
}

class User {
  private readonly name: string;

  private readonly notifier: Notifier;

  constructor(name: string, notifier: Notifier) {
    this.name = name;
    this.notifier = notifier;
  }

  receiveNotification(message: string): void {
    this.notifier.notify(`${this.name}: ${message}`);
  }
}

(() => {
  const users = [
    new User('User 1', new EmailNotifier()),
    new User('User 2', new SMSNotifierDecorator(new EmailNotifier())),
    new User('User 3', new WhatsAppNotifierDecorator(new SMSNotifierDecorator(new EmailNotifier()))),
  ];

  users.forEach((user) => user.receiveNotification('Hello World'));
})();
