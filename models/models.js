const getApiDate = (data = {}) => {
	const timestamp = Number(data.dt);
	const timezone = Number(data.timezone ?? 0);

	if (!Number.isFinite(timestamp) || !Number.isFinite(timezone)) {
		return null;
	}

	const date = new Date((timestamp + timezone) * 1000);
	return Number.isNaN(date.getTime()) ? null : date;
};

const normalizeWeather = (data = {}) => {
	const apiDate = getApiDate(data);

	return {
		city: data.name ?? 'Unavailable',
		day:
			apiDate?.toLocaleDateString('en-US', {
				weekday: 'long',
				timeZone: 'UTC',
			}) ?? 'Unavailable',
		date:
			apiDate?.toLocaleDateString('en-US', {
				day: 'numeric',
				month: 'long',
				year: 'numeric',
				timeZone: 'UTC',
			}) ?? 'Unavailable',
		country: data.sys?.country ?? 'Unavailable',
		temperature: data.main?.temp ?? 'Unavailable',
		feelsLike: data.main?.feels_like ?? 'Unavailable',
		humidity: data.main?.humidity ?? 'Unavailable',
		description: data.weather?.[0]?.description ?? 'Unavailable',
		icon: data.weather?.[0]?.icon ?? 'Unavailable',
		wind: data.wind?.speed ?? 'Unavailable',
	};
};

module.exports = { normalizeWeather };
