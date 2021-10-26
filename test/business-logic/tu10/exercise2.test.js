import arrayClean from '../../../docs/tu10/scripts/exercise2';

describe('Anagrams Clean Test Suite', () => {
	it('should returns the uniques anagrams from the array words', () => {
		const arr = [
			'nap',
			'teachers',
			'cheaters',
			'PAN',
			'ear',
			'era',
			'hectares',
		];
		const expected = ['nap', 'teachers', 'ear'];

		expect(arrayClean(arr)).toEqual(expect.arrayContaining(expected));
	});

	it('returns the uniques phrases anagrams from the array', () => {
		const arr = [
			'Frankly old',
			'Dim as sunshade',
			'Issues mad hand',
			'Essential blab',
			'Drank folly',
			'Lark fondly',
			'A humid sadness',
			'Balinese blast',
		];
		const expected = ['Frankly old', 'Dim as sunshade', 'Essential blab'];

		expect(arrayClean(arr)).toEqual(expect.arrayContaining(expected));
	});
});
