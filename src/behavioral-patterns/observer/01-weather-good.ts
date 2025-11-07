// weather-observer.ts
export interface WeatherData {
  temperatureC: number;
  humidity: number;
  pressure: number;
}

// Observer interface
export interface WeatherObserver {
  update(data: WeatherData): void;
}

// Subject: WeatherStation implements subscribe/unsubscribe/notify
export class WeatherStation {
  private observers: Set<WeatherObserver> = new Set();
  private latest: WeatherData | null = null;

  subscribe(observer: WeatherObserver) {
    this.observers.add(observer);
  }

  unsubscribe(observer: WeatherObserver) {
    this.observers.delete(observer);
  }

  updateSensor(data: WeatherData) {
    this.latest = data;
    this.notify();
  }

  notify() {
    if (!this.latest) return;
    // Notify synchronously; consider async dispatch if required.
    for (const obs of Array.from(this.observers)) {
      try {
        obs.update(this.latest);
      } catch (err) {
        // Handle per-observer errors so one bad observer doesn't break notification.
        console.error("Observer update failed:", err);
      }
    }
  }

  getLatest() {
    return this.latest;
  }
}

// Example Observers (can live in separate modules)
export class ConsoleTempObserver implements WeatherObserver {
  update(data: WeatherData): void {
    console.log(`ConsoleTemp: ${data.temperatureC}°C`);
  }
}

export class FancyUIObserver implements WeatherObserver {
  update(data: WeatherData): void {
    console.log(
      `FancyUI -> Temp: ${data.temperatureC}°C, Humidity: ${data.humidity}%`,
    );
  }
}

export class LogObserver implements WeatherObserver {
  update(data: WeatherData): void {
    console.log(`Log: temp=${data.temperatureC}, pressure=${data.pressure}`);
  }
}

export default function run() {
  const station = new WeatherStation();
  const consoleObs = new ConsoleTempObserver();
  const fancyObs = new FancyUIObserver();
  const logObs = new LogObserver();

  station.subscribe(consoleObs);
  station.subscribe(fancyObs);
  station.subscribe(logObs);

  station.updateSensor({ temperatureC: 20.1, humidity: 55, pressure: 1012 });
  station.updateSensor({ temperatureC: 21.3, humidity: 53, pressure: 1011 });

  // Unsubscribe an observer:
  station.unsubscribe(fancyObs);
  station.updateSensor({ temperatureC: 22.0, humidity: 50, pressure: 1010 });
}
