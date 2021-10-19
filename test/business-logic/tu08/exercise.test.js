import { ValidatePassword } from '../../../docs/tu08/scripts/exercise';

describe('Validate password green path Test Suite', () => {
	const phrase = 'PRü3b4_6}57';
	const pass = new ValidatePassword(phrase);

	test(`if '${phrase}' have least 8 characters`, () => {
		expect(pass.haveMinChars()).toBeTruthy();
	});

	it(`should returns 1 (true) when check '${phrase}' have least 1 lower character`, () => {
		expect(pass.haveLowerCases()).toBeTruthy();
	});

	it(`should returns 1 (true) when check '${phrase}' have least 1 upper character`, () => {
		expect(pass.haveUpperCases()).toStrictEqual(1);
	});

	it(`'${phrase}' should be truthy when check have least 1 number`, () => {
		expect(pass.haveNumbers()).toBeTruthy();
	});

	it(`should returns true when '${phrase}' have least 1 special character`, () => {
		expect(pass.haveSpecialChars()).toBeTruthy();
	});
});

describe('Validate password negative path Test Suite', () => {
	it('should returns false when "refutal" have less than 8 characters', () => {
		const pass = new ValidatePassword('refutal');
		expect(pass.haveMinChars()).toBeFalsy();
	});

	it('should returns 0 (false) when "refutal" does not have any uppercase letters', () => {
		const pass = new ValidatePassword('refutal');
		expect(pass.haveUpperCases()).toEqual(0);
	});

	it('should returns false when "refutal" does not have any special letters', () => {
		const pass = new ValidatePassword('refutal');
		expect(pass.haveSpecialChars()).toBeFalsy();
	});

	it('should returns false when "refutal" does not have any uppercase letters', () => {
		const pass = new ValidatePassword('refutal');
		expect(pass.haveNumbers()).toBeFalsy();
	});

	it('should returns false when "REFUTAL" does not have any uppercase letters', () => {
		const pass = new ValidatePassword('REFUTAL');
		expect(pass.haveLowerCases()).toBeFalsy();
	});
});
