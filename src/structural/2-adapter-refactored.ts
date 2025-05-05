class StripePaymentSDK {
    public pay(amount: number): void {
        console.log(`Stripe payment of ${amount} done`);
    }
}

class PayPalPaymentSDK {
    public processPayment(amount: number): void {
        console.log(`PayPal payment of ${amount} done`);
    }
}

interface Payment {
    pay(amount: number): void;
}

class StripePaymentAdapter implements Payment {
    public pay(amount: number): void {
        const stripePayment = new StripePaymentSDK();
        stripePayment.pay(amount);
    }
}

class PayPalPaymentAdapter implements Payment {
    public pay(amount: number): void {
        const paypalPayment = new PayPalPaymentSDK();
        paypalPayment.processPayment(amount);
    }
}

class SubscriptionService {
    private readonly paymentMethod: Payment;

    constructor(paymentMethod: Payment) {
        this.paymentMethod = paymentMethod;
    }

    public subscribe(): void {
        this.paymentMethod.pay(100);
    }
}

const subscriptionService = new SubscriptionService(new StripePaymentAdapter());
subscriptionService.subscribe();

export { };
