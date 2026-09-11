/*
 list: [
    {
      dt: 1788976800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2026-09-09 18:00:00'
    }  
      ],
  city: {
    id: 2735943,
    name: 'Porto',
    coord: { lat: 41.1496, lon: -8.611 },
    country: 'PT',
    population: 249633,
    timezone: 3600,
    sunrise: 1788934131,
    sunset: 1788980112
  }
}
*/

const formatDay = (timestamp) => {
	if (!timestamp) return 'Unavailable';
	try {
		const date = new Date(timestamp * 1000);
		return date.toLocaleDateString('en-US', {
			weekday: 'short',
		});
	} catch {
		return 'Unavailable';
	}
};

const formatTemp = (temp) => {
	if (temp === null || temp === undefined) return 'Unavailable';
	try {
		return Math.round(temp);
	} catch {
		return 'Unavailable';
	}
};

const filter12hForecast = (list = []) => {
	if (!Array.isArray(list)) return [];
	const filtered = list.filter((item = {}) => {
		if (typeof item.dt_txt === 'string' && item.dt_txt !== 'Unavailable') {
			return item.dt_txt.includes('12:00:00');
		}
		if (item.dt) {
			const hours = new Date(item.dt * 1000).getUTCHours();
			return hours === 12;
		}
		return false;
	});

	if (filtered.length === 0 && list.length > 0) {
		return list.filter((_, index) => index % 4 === 0);
	}

	return filtered;
};

const normalizeWeatherForecast = (data = {}) => {
	const rawList = Array.isArray(data.list) ? data.list : [];
	const filteredList = filter12hForecast(rawList);

	return {
		...data,
		list: filteredList.map((item = {}) => ({
			...item,
			dt: formatDay(item.dt),
			main: item.main ?? {},
			temp: formatTemp(item.main?.temp),
			weather: item.weather ?? [],
			clouds: item.clouds ?? {},
			wind: item.wind ?? {},
			visibility: item.visibility ?? 'Unavailable',
			pop: item.pop ?? 'Unavailable',
			sys: item.sys ?? {},
			dt_txt: item.dt_txt ?? 'Unavailable',
		})),
	};
};

module.exports = { normalizeWeatherForecast, filter12hForecast };
