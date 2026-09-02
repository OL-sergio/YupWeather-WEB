const express = require('express');
const router = express.Router();
const { getWeatherData } = require('../services/weatherService');

router.get('/', async (req, res) => {
	const city = String(req.query.city || '').trim();

	if (!city) {
		return res.render('index', { weather: null, error: null, city: '' });
	}

	try {
		const data = await getWeatherData(city);
		res.render('index', { weather: data, error: null, city });
	} catch (err) {
		res
			.status(502)
			.render('index', { weather: null, error: err.message, city });
	}
});

module.exports = router;
