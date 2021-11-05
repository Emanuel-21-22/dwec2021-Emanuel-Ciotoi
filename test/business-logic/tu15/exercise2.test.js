import { byField } from '../../../docs/tu15/scripts/exercise2';

describe('Sort Array with function "byField" Test Suite', () => {
	const users = [
		{ name: 'John', age: 20, surname: 'Johnson' },
		{ name: 'Pete', age: 18, surname: 'Peterson' },
		{ name: 'Ann', age: 19, surname: 'Hathaway' },
	];

	it('should sorted by age', () => {
		const expected = [
			{ name: 'Pete', age: 18, surname: 'Peterson' },
			{ name: 'Ann', age: 19, surname: 'Hathaway' },
			{ name: 'John', age: 20, surname: 'Johnson' },
		];
		const resp = users.sort(byField('age'));

		expect(resp).toEqual(expect.arrayContaining(expected));
	});

	it('should sorted by name', () => {
		const expected = [
			{ name: 'Ann', age: 19, surname: 'Hathaway' },
			{ name: 'John', age: 20, surname: 'Johnson' },
			{ name: 'Pete', age: 18, surname: 'Peterson' },
		];
		const resp = users.sort(byField('name'));

		expect(resp).toEqual(expect.arrayContaining(expected));
	});

	it('should sorted by surname', () => {
		const expected = [
			{ name: 'Ann', age: 19, surname: 'Hathaway' },
			{ name: 'John', age: 20, surname: 'Johnson' },
			{ name: 'Pete', age: 18, surname: 'Peterson' },
		];
		const resp = users.sort(byField('surname'));

		expect(resp).toEqual(expect.arrayContaining(expected));
	});
});
