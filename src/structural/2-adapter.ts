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

class SubscriptionService {
    private readonly paymentMethod: string;

    constructor(paymentMethod: string) {
        this.paymentMethod = paymentMethod;
    }

    public subscribe(): void {
        if (this.paymentMethod === "stripe") {
            const stripePayment = new StripePaymentSDK();

            stripePayment.pay(100);
        }
    }
}

const subscriptionService = new SubscriptionService("stripe");
subscriptionService.subscribe();

export { };
