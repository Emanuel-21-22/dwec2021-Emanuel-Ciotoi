import unique from '../../../docs/tu10/scripts/exercise1';

describe('Unique Array Test Suite', () => {
	it('should returns any uniques numbers', () => {
		const arr = [65, 35, 61, 78, 54, 31, 984, 65, 98, 12, 54, 35, 984, 78, 35];
		const expected = [65, 35, 61, 78, 54, 31, 984, 98, 12];

		expect(unique(arr)).toEqual(expect.arrayContaining(expected));
	});

	it('should returns any single character in a phrase', () => {
		const arr =
			'Her last smile to me wasn’t a sunset. It was an eclipse, the \
			last eclipse, noon dying away to darkness where there would be no dawn.';
		const expected = [
			'H',
			'e',
			'r',
			' ',
			'l',
			'a',
			's',
			't',
			'm',
			'i',
			'o',
			'w',
			'n',
			'’',
			'u',
			'.',
			'I',
			'c',
			'p',
			',',
			'h',
			'd',
			'y',
			'g',
			'k',
			'b',
		];

		expect(unique(arr)).toEqual(expect.arrayContaining(expected));
	});
});
