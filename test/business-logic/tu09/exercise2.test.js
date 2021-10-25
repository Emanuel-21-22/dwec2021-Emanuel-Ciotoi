import getAverageAge from '../../../docs/tu09/scripts/exercise2';

describe('Get Average Age Test Suite', () => {
	it('should returns 28 when calculates the 3 ages', () => {
		const john = { name: 'John', age: 25 };
		const pete = { name: 'Pete', age: 30 };
		const mary = { name: 'Mary', age: 29 };

		const arr = [john, pete, mary];

		expect(getAverageAge(arr)).toEqual(28);
	});

	it('should returns 27.4 when calculates the 5 ages', () => {
		const john = { name: 'John', age: 25 };
		const pete = { name: 'Pete', age: 30 };
		const mary = { name: 'Mary', age: 29 };
		const rose = { name: 'Rose', age: 20 };
		const alice = { name: 'Alice', age: 33 };

		const arr = [john, pete, mary, rose, alice];

		expect(getAverageAge(arr)).toBeCloseTo(27.4, 1);
	});
});
