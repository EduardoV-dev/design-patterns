interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number): void {
    // credit card processing logic
    console.log(`Processing credit card payment of $${amount}`);
    // ...call gateway A
    return;
  }
}

class PaypalStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
    // ...call PayPal API
    return;
  }
}

class BankTransferStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing bank transfer payment of $${amount}`);
    // ...call bank API
    return;
  }
}

class PaymentContext {
  constructor(private paymentStrategy: PaymentStrategy) {}

  setPaymentMethod(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  executePayment(amount: number) {
    this.paymentStrategy.pay(amount);
  }
}

export default function run() {
  const payment = new PaymentContext(new CreditCardStrategy());
  payment.executePayment(120);

  payment.setPaymentMethod(new PaypalStrategy());
  payment.executePayment(45.5);

  payment.setPaymentMethod(new BankTransferStrategy());
  payment.executePayment(200);
}
