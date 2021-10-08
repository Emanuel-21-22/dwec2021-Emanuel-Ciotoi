import { pow } from '../../../docs/tu06/scripts/ex3';
import { ask } from '../../../docs/tu06/scripts/ex4';

describe('Exponentiation Test Suite', () => {
	it('returns 64 when 2 is elevated at 6', () => {
		expect(pow(2, 6)).toBe(64);
	});

	it('returns 0 when 0 is elevated at 5', () => {
		expect(pow(0, 5)).toBe(0);
	});

	it('returns -125 when -5 is elevated at 3', () => {
		expect(pow(-5, 3)).toBe(-125);
	});

	it("returns 64 when '3' is elevated at 5", () => {
		expect(pow('3', 5)).toBe(243);
	});

	it('returns NaN when NaN is elevated at 2', () => {
		expect(pow(NaN, 2)).toBeNaN();
	});

	it("returns NaN when 'a' is elevated at 2", () => {
		expect(pow('a', 2)).toBeNaN();
	});

	let a;
	it('returns NaN when variable a is elevated at 2', () => {
		expect(pow(a, 2)).toBeNaN();
	});
});

describe('Ask an number Test Suite', () => {
	it("checks if with 23 the console response with 'Is positive'", () => {
		console.info = jest.fn();
		const num = 23;

		ask(
			num,
			() => {
				console.info('Is positive');
			},
			() => {
				console.info('Is negative');
			}
		);

		expect(console.info).toBeCalledWith('Is positive');
	});

	it("checks if with -23 the console response with 'Is negative'", () => {
		console.info = jest.fn();
		const num = -23;

		ask(
			num,
			() => {
				console.info('Is positive');
			},
			() => {
				console.info('Is negative');
			}
		);

		expect(console.info).toBeCalledWith('Is negative');
	});

	it("checks if with 0 the console response with 'Is positive'", () => {
		console.info = jest.fn();
		const num = 0;

		ask(
			num,
			() => {
				console.info('Is positive');
			},
			() => {
				console.info('Is negative');
			}
		);

		expect(console.info).toBeCalledWith('Is positive');
	});

	it("checks if with 5.554 the console response with 'Is positive'", () => {
		console.info = jest.fn();
		const num = 5.554;

		ask(
			num,
			() => {
				console.info('Is positive');
			},
			() => {
				console.info('Is negative');
			}
		);

		expect(console.info).toBeCalledWith('Is positive');
	});
});
