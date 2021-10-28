import { getLastDayOfMonth } from '../../../docs/tu11/scripts/exercise2';

describe('Last Day of Month Test Suite', () => {
	const now = new Date();
	let year = now.getFullYear(),
		month = now.getMonth();

	it.each`
		year    | month | expectedDay
		${2012} | ${1}  | ${29}
		${2021} | ${1}  | ${28}
		${2023} | ${11} | ${31}
	`(
		'the last day of %d month %d should be %d',
		({ year, month, expectedDay }) => {
			expect(getLastDayOfMonth(year, month)).toEqual(expectedDay);
		}
	);

	it(`the last day of this month ${year}-${month} should >= 28`, () => {
		expect(getLastDayOfMonth()).toBeGreaterThanOrEqual(28);
	});
});
