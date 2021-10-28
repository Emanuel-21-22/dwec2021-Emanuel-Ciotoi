import { getWeekDay } from '../../../docs/tu11/scripts/exercise1';

describe('Weekday in Show Format Test Suite', () => {
	it.each([
		[new Date(2022, 0, 3), 'MO'],
		[new Date(2024, 1, 29), 'TH'],
		[new Date(2019, 5, 32), 'TU'],
		[new Date(2021, 9), 'FR'],
		[new Date(null, 3), 'SU'],
		[new Date(null, null, 27), 'SA'],
	])('should day %o at local to be %s', (input, expected) => {
		expect(getWeekDay(input)).toBe(expected);
	});
});
