// WITHOUT Strategy: client code decides which processor to use with if/else

type ProcessorType = "creditCard" | "paypal" | "bankTransfer";

function processPayment(type: ProcessorType, amount: number) {
  if (type === "creditCard") {
    // credit card processing logic
    console.log(`Processing credit card payment of $${amount}`);
    // ...call gateway A
    return;
  }

  if (type === "paypal") {
    console.log(`Processing PayPal payment of $${amount}`);
    // ...call PayPal API
    return;
  }

  if (type === "bankTransfer") {
    console.log(`Processing bank transfer payment of $${amount}`);
    // ...call bank API
    return;
  }

  throw new Error("Unsupported processor");
}

export default function run() {
  processPayment("creditCard", 120);
  processPayment("paypal", 45.5);
  processPayment("bankTransfer", 200);
}
