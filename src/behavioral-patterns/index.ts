import badPaymentMethod from "./strategy/01-payment-methods-bad";
import goodPaymentMethod from "./strategy/01-payment-methods-good";

const behavioralPatterns = {
  strategy: {
    paymentMethods: {
      bad: badPaymentMethod,
      good: goodPaymentMethod,
    },
  },
};

export default behavioralPatterns;
