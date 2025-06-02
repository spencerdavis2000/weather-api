import express from 'express';
const router = express.Router();

import { defaultRoute } from './controllers/defaultRoute'
import { getWeatherByCity } from './controllers/getWeatherByCity';

/**
 * @swagger
 * /api/v1/getWeatherByCity/{city}:
 *   get:
 *     summary: Get lat/lon by city
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A geolocation result
 */

router.get('/getWeatherByCity/:city', getWeatherByCity);
router.all('*', defaultRoute);

export default router;