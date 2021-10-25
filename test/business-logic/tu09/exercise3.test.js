import { topSalary } from '../../../docs/tu09/scripts/exercise3';

describe('Top Salary Test Suite', () => {
	it('returns the top salary as Ann', () => {
		const salaries = {
			John: 200,
			Ann: 250,
		};

		expect(topSalary(salaries)).toEqual('Ann');
	});

	it('returns the top salary as Lisa', () => {
		const salaries = {
			John: 200,
			Ann: 250,
			Lisa: 500,
			Luke: 400,
		};

		expect(topSalary(salaries)).toEqual('Lisa');
	});

	it('returns null when the top salary is void', () => {
		const salaries = {};

		expect(topSalary(salaries)).toBeNull();
	});
});
