const axios = require('axios');
const { normalizeWeatherDay } = require('../models/day');
const { normalizeWeatherForecast } = require('../models/forecast');

const API_KEY = process.env.WEATHER_API_KEY;
const URL_WEATHER = 'https://api.openweathermap.org/data/2.5/weather';
const URL_FORECAST = 'https://api.openweathermap.org/data/2.5/forecast';

const getWeatherDay = async (city) => {
	if (!API_KEY) {
		throw new Error('Weather API key is not configured');
	}
	try {
		const response = await axios.get(URL_WEATHER, {
			params: {
				q: city, 
				appid: API_KEY, 
				units: 'metric' 
			},
				timeout: 10000,
		});
		return normalizeWeatherDay(response.data);
	} catch (error) {
		throw new Error(error.response?.data?.message || 'Weather fetch failed');
	}
};

const getWeatherForecast = async (city) => {
	if (!API_KEY) {
		throw new Error('Weather API key is not configured');
	}
	try {
		const response = await axios.get(URL_FORECAST, {
			params: { 
				q: city, 
				appid: API_KEY, 
				units: 'metric' 
			},
				timeout: 10000,
		});
		return normalizeWeatherForecast(response.data);
	} catch (error) {
		throw new Error(error.response?.data?.message || 'Weather fetch failed');
	}
};

module.exports = { getWeatherDay, getWeatherForecast };
