export interface Observer {
  update(state: unknown): void;
}

export interface Observable {
  subscribe(observer: Observer): void;

  unsubscribe(observer: Observer): void;

  notify(): void;
}

class Store implements Observable {
  private readonly observers: Observer[];

  private state: string;

  constructor() {
    this.observers = [];
    this.state = 'no products are ready yet';
  }

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers.splice(this.observers.indexOf(observer), 1);
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this.getState()));
  }

  setState(state: string): void {
    this.state = state;
    this.notify();
  }

  getState(): string {
    return this.state;
  }
}

class Customer implements Observer {
  update(state: unknown): void {
    console.log(`Customer: The store told me "${state}"`);
  }
}

(() => {
  const store = new Store();
  const customer = new Customer();

  store.subscribe(customer);

  store.setState('your product is almost ready');
  store.setState('your product is ready');
})();
