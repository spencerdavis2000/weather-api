import { pollingService } from "./polling";
import { getWeatherByGeolocation } from "./weatherData";
import { setCachedWeather } from "./weatherCache";

export function startPollingUpdates() {
  setInterval(async () => {
    const entries = pollingService.getAll();

    for (const entry of entries) {
      try {
        const data = await getWeatherByGeolocation(entry.lat, entry.lon);
        setCachedWeather(entry.city, data);
        console.log(`Updated cache for $entry.city`);

      } catch (err) {
        console.error(`Failed to update ${entry.city}:`, err);
      }
    }
  }, 10 * 60 * 100);
}