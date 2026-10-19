const express = require('express');
const router = express.Router();
const {
	getWeatherDay,
	getWeatherForecast,
} = require('../services/weatherService');

const DEFAULT_CITY = 'Lisbon';

router.get('/', async (req, res) => {
	const city = String(req.query.city || '').trim() || DEFAULT_CITY;

	try {
		const dayData = await getWeatherDay(city);
		const forecastData = await getWeatherForecast(city);
		res.render('index', {
			weather: dayData,
			forecast: forecastData,
			error: null,
			city,
		});
	} catch (err) {
		res.status(502);
		res.render('index', {
			weather: null,
			forecast: null,
			error: err.message,
			city,
		});
	}
});

module.exports = router;
