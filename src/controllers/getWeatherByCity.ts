import { NextFunction, Request, Response } from 'express';
import { getGeoLocationsByCity, getWeatherByGeolocation } from '../services/weatherData';
import { getCachedWeather } from '../services/weatherCache';
import { pollingService } from '../services/polling';

export async function getWeatherByCity(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const city = req.params.city;

    if (!city) throw new Error('City not provided');

    const cached = getCachedWeather(city);
    if (cached) {
      res.status(200).json(cached.data);
      return;
    }

    const geo = await getGeoLocationsByCity(city);
    // get only the top result for it to be able to search by only city
    const { lat, lon } = geo[0];
    const weather = await getWeatherByGeolocation(lat, lon);

    pollingService.add(city, lat, lon);
    res.status(200).json(weather);
  } catch (error) {
    next(error);
  }
}