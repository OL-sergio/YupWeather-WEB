import { animate, stagger } from 'animejs';

// Animate the main page wrapper on visual load
animate('.weather-app', {
	opacity: [0, 1],
	scale: [0.95, 1],
	duration: 1000,
	ease: 'outExpo',
});

animate('.search-information', {
	y: [-50, 0],
	opacity: [0, 1],
	duration: 800,
});

// Animate the weather card when it appears
animate('.weather-card', {
	y: [-50, 0],
	opacity: [0, 1],
	duration: 800,
});

// Stagger the forecast days
animate('.forecast-day', {
	opacity: [0, 1],
	y: [20, 0],
	duration: 600,
	delay: stagger(100),
});

animate('.forecast-data', {
	opacity: [0, 2],
	y: [40, 0],
	duration: 600,
	delay: stagger(100),
});
