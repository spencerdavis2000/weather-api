import axios from 'axios';
import { apiKey } from '../envs/apiKey';

export async function getGeoLocationsByCity(city: string) {
  const api_key = apiKey.weatherApiKey;
  try {
    const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
      params: {
        q: city,
        limit: 5,
        appid: api_key,
      },
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
}

export async function getWeatherByGeolocation(lat: number, lon: number) {
  const api_key = apiKey.weatherApiKey;
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall`, {
      params: {
        lat: lat,
        lon: lon,
        exclude: 'minutely,hourly,alerts',
        appid: api_key,
      },
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
}