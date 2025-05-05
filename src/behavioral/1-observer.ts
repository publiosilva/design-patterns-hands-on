const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class Store {
    private products: string[] = [];

    async fillProductStock() {
        for (let i = 0; i < 10; i++) {
            this.products.push(`Product ${i + 1}`);
            await sleep(1000);
        }
    }

    getProduct(name: string) {
        return this.products.find((product) => product === name) || null;
    }
}

class Customer {
    desiredProductName: string;

    constructor(desiredProductName: string) {
        this.desiredProductName = desiredProductName;
    }

    buyProduct(product: string) {
        console.log(`Customer is buying ${product}`);
    }
}

const store = new Store();
const customer = new Customer("Product 8");

store.fillProductStock();

const checkProduct = async () => {
    while (true) {
        const product = store.getProduct(customer.desiredProductName);
        
        if (product) {
            customer.buyProduct(product);
            break;
        } else {
            console.log(`${customer.desiredProductName} is not available`);
        }

        await sleep(1000);
    }
};

checkProduct();

export { };

