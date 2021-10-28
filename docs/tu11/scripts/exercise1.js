'use strict';

export const getWeekDay = (date) =>
	date
		.toLocaleDateString('en-GB', { weekday: 'short' })
		.substr(0, 2)
		.toUpperCase();
