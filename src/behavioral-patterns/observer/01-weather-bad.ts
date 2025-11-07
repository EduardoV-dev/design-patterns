// weather-bad.ts
export interface WeatherData {
  temperatureC: number;
  humidity: number;
  pressure: number;
}

// Concrete display functions that the WeatherStation directly calls.
export function displayConsoleTemp(data: WeatherData) {
  console.log(`ConsoleTemp: ${data.temperatureC}°C`);
}

export function displayFancyUI(data: WeatherData) {
  console.log(
    `FancyUI -> Temp: ${data.temperatureC}°C, Humidity: ${data.humidity}%`,
  );
}

export function logWeather(data: WeatherData) {
  console.log(`Log: temp=${data.temperatureC}, pressure=${data.pressure}`);
}

// WeatherStation directly knows and calls specific displays.
// This is bad: adding/removing displays requires editing this file.
export class WeatherStation {
  private latest: WeatherData | null = null;

  updateSensor(data: WeatherData) {
    this.latest = data;
    // Direct calls to concrete display / logging functions:
    displayConsoleTemp(data);
    displayFancyUI(data);

    // Conditional branch added later for logging flag:
    const enableLogging = true;
    if (enableLogging) {
      logWeather(data);
    }
  }

  getLatest() {
    return this.latest;
  }
}

export default function run() {
  const station = new WeatherStation();

  station.updateSensor({ temperatureC: 20.1, humidity: 55, pressure: 1012 });
  station.updateSensor({ temperatureC: 21.3, humidity: 53, pressure: 1011 });
}
