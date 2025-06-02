

interface WeatherCacheEntry {
  city: string;
  data: any;
  timestamp: number;
}

const weatherCache = new Map<string, WeatherCacheEntry>();

export function setCachedWeather(city: string, data: any) {
  weatherCache.set(city.toLowerCase(), {
    city, 
    data,
    timestamp: Date.now(),
  });
}

export function getCachedWeather(city: string): WeatherCacheEntry | undefined {
  return weatherCache.get(city.toLowerCase());
}