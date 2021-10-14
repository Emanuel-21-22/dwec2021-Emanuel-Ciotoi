import { Calculator as Calc } from '../../../docs/tu07-2/scripts/index';

describe('Calculator function Test Suite', () => {
	const num1 = 230,
		num2 = 456;
	const calculator = new Calc(num1, num2);

	it(`returns 686 when sum ${num1} & ${num2}`, () => {
		expect(calculator.sum()).toEqual(686);
	});

	it(`returns 104880 when multiply ${num1} by ${num2}`, () => {
		expect(calculator.mul()).toEqual(104880);
	});

	it(`returns 343 when average between ${num1} & ${num2}`, () => {
		expect(calculator.avg()).toEqual(343);
	});

	//Negative tests
	it('returns 99.5 when average between -116 & 315', () => {
		const calculator2 = new Calc(-116, 315);
		expect(calculator2.avg()).toEqual(99.5);
	});

	it('is returned -33346.6161 when multiply -105.78 by 315.245', () => {
		const calculator2 = new Calc(-105.78, 315.245);
		expect(calculator2.mul()).toBeCloseTo(-33346.6161, 4);
	});
});
