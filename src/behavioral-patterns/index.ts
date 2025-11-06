import badPaymentMethod from "./strategy/01-payment-methods-bad";
import goodPaymentMethod from "./strategy/01-payment-methods-good";
import badImageFilter from "./strategy/02-image-filters-bad";
import goodImageFilter from "./strategy/02-image-filters.good";
import badShipping from "./strategy/03-shipping-methods-bad";
import goodShipping from "./strategy/03-shipping-methods-good";

const behavioralPatterns = {
  strategy: {
    paymentMethods: {
      bad: badPaymentMethod,
      good: goodPaymentMethod,
    },
    imageFilters: {
      bad: badImageFilter,
      good: goodImageFilter,
    },
    shipping: {
      bad: badShipping,
      good: goodShipping,
    },
  },
};

export default behavioralPatterns;
