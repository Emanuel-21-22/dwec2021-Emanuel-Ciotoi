import { sum } from '../../../docs/tu15/scripts/exercise1';

describe('Sum Nested Funcion Test Suite', () => {
	test.each`
		a     | b     | total
		${1}  | ${2}  | ${3}
		${5}  | ${-1} | ${4}
		${-7} | ${3}  | ${-4}
	`('should sum $a and $b returns $total', ({ a, b, total }) => {
		expect(sum(a)(b)).toEqual(total);
	});
});
