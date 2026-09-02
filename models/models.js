const normalizeWeather = (data) => ({
	city: data.name,
	country: data.sys?.country || '',
	temperature: data.main?.temp,
	feelsLike: data.main?.feels_like,
	humidity: data.main?.humidity,
	description: data.weather?.[0]?.description || 'Unavailable',
});

module.exports = { normalizeWeather };
