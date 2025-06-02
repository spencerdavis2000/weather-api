// src/config/api.ts
if (!process.env.API_KEY) {
  throw new Error('Missing OPENWEATHER_API_KEY in env');
}

export const apiKey = {
  weatherApiKey: process.env.API_KEY as string,
};
