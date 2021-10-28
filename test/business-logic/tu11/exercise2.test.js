import { getLastDayOfMonth } from '../../../docs/tu11/scripts/exercise2';

describe('Last Day of Month Test Suite', () => {
	const now = new Date();
	let year = now.getFullYear(),
		month = now.getMonth();

	it.each([
		[2012, 1, 29],
		[2022, 0, 31],
		[2023, 11, 31],
		[2021, 1, 28],
		[2021, 5, 30],
		[2021, 15, 30],
	])('the last day of %d month %d should be %d', (year, month, expectedDay) => {
		expect(getLastDayOfMonth(year, month)).toEqual(expectedDay);
	});

	it(`the last day of this month ${year}-${month} should >= 28`, () => {
		expect(getLastDayOfMonth()).toBeGreaterThanOrEqual(28);
	});
});
