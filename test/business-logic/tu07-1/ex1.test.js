import * as ex1 from '../../../docs/tu07-1/scripts/ex1';

describe('TU07 Exercises Part One Test Suite', () => {
	it('should checks if the surname at createUser is Smith', () => {
		const user = ex1.createUser();

		expect(user.surname).toBe('Smith');
	});

	it('should checks if the name at createUser not exist', () => {
		const user = ex1.createUser();

		expect(user.name).toBeUndefined();
	});

	it('should returns true if the object has no properties', () => {
		const schedule = {};

		expect(ex1.isEmpty(schedule)).toBeTruthy();
	});

	it('should returns false if the object has properties', () => {
		const schedule = { '8:30': 'get up' };

		expect(ex1.isEmpty(schedule)).toBeFalsy();
	});

	it('should returns 390 when sum the 3 object values', () => {
		const salario = { John: 100, Ann: 160, Pete: 130 };

		expect(ex1.sum(salario)).toEqual(390);
	});

	it('should returns 647 when sum the 4 object values', () => {
		const salario = { John: 150, Ann: 195, Pete: 172, Bill: 130 };

		expect(ex1.sum(salario)).toBe(647);
	});

	it('should multiply by 2 de values at the menu object', () => {
		const menu = {
			width: 200,
			height: 300,
			title: 'My menu',
		};

		const menuAfter = {
			width: 400,
			height: 600,
			title: 'My menu',
		};

		ex1.multiplyNumeric(menu);

		expect(menu).toStrictEqual(menuAfter);
	});
});
