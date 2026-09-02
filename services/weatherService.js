const axios = require('axios');
const { normalizeWeather } = require('../models/models');

//https://openweathermap.org/api/forecast5?collection=current_forecast#5days
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const getWeatherData = async (city) => {
	const API_KEY = process.env.WEATHER_API_KEY;
	const URL = 'https://api.openweathermap.org/data/2.5/weather';

	if (!API_KEY) {
		throw new Error('Weather API key is not configured');
	}

	try {
		const response = await axios.get(URL, {
			params: {
				q: city,
				appid: API_KEY,
				units: 'metric',
			},
			timeout: 10000,
		});

		return normalizeWeather(response.data);
	} catch (error) {
		throw new Error(error.response?.data?.message || 'Weather fetch failed');
	}
};

module.exports = { getWeatherData };
