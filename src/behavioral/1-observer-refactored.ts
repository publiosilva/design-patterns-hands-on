const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface Subscriber {
    update(product: string): void;
}

class Store {
    private products: string[] = [];

    private subscribers: Subscriber[] = [];

    async fillProductStock() {
        for (let i = 0; i < 10; i++) {
            this.products.push(`Product ${i + 1}`);
            this.notifySubscribers(`Product ${i + 1}`);
            await sleep(1000);
        }
    }

    getProduct(name: string) {
        return this.products.find((product) => product === name) || null;
    }

    subscribe(subscriber: Subscriber) {
        this.subscribers.push(subscriber);
    }

    notifySubscribers(product: string) {
        for (const subscriber of this.subscribers) {
            subscriber.update(product);
        }
    }
}

class Customer implements Subscriber {
    desiredProductName: string;

    constructor(desiredProductName: string) {
        this.desiredProductName = desiredProductName;
    }

    buyProduct(product: string) {
        console.log(`Customer is buying ${product}`);
    }

    update(product: string) {
        if (product === this.desiredProductName) {
            this.buyProduct(product);
        }
    }
}

const store = new Store();
const customer = new Customer("Product 8");

store.subscribe(customer);

store.fillProductStock();

export { };

