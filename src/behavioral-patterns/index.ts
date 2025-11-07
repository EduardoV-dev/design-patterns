import badPaymentMethod from "./strategy/01-payment-methods-bad";
import goodPaymentMethod from "./strategy/01-payment-methods-good";
import badImageFilter from "./strategy/02-image-filters-bad";
import goodImageFilter from "./strategy/02-image-filters.good";
import badShipping from "./strategy/03-shipping-methods-bad";
import goodShipping from "./strategy/03-shipping-methods-good";
import badWeather from "./observer/01-weather-bad";
import goodWeather from "./observer/01-weather-good";
import badStock from "./observer/02-stock-bad";
import goodStock from "./observer/02-stock-good";
import badNotification from "./observer/03-notification-bad";
import goodNotification from "./observer/03-notification-good";

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
  observer: {
    weather: {
      bad: badWeather,
      good: goodWeather,
    },
    stock: {
      bad: badStock,
      good: goodStock,
    },
    notification: {
      bad: badNotification,
      good: goodNotification,
    },
  },
};

export default behavioralPatterns;
