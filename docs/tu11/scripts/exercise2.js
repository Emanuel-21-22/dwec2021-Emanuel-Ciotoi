'use strict';

/**
 * Shows the last day of the `month` in that `year`
 * @param {number} year Need 4 digits to work
 * @param {number} month From 0 to 11
 * @returns
 */
export const getLastDayOfMonth = (
	year = new Date().getFullYear(),
	month = new Date().getMonth()
) => new Date(year, month + 1, 0).getDate();
