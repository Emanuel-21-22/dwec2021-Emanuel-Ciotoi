import { transformJson, showJSON } from '../../../docs/tu13/scripts/exercise1';

const jsonString = `{"year":2021,"city":"Gandia","school":"IES Maria Enriquez","active":true,"numberOfStudents":12,"teacher":{"name":"Xavi","age":46,"car":{"brand":"Seat","model":"Leon","year":2015}},"students":[{"name":"Israel","age":34,"male":true,"hobbies":["Football","Programming","Cycling"]},{"name":"Victor","age":21,"male":true,"hobbies":["Basketball","Running","Gaming"]}]}`;

describe('JSON Data DAW Test Suite', () => {
	const jsonParsed = transformJson(jsonString);

	test('JSON have not teacher age', () => {
		expect(jsonParsed).not.toHaveProperty('teacher.age');
	});

	it('should have the student "Carles"', () => {
		const carles = {
			name: 'Carles',
			age: 23,
			male: true,
			hobbies: ['Football', 'Running', 'Gaming'],
		};

		expect(jsonParsed.students).toEqual(expect.arrayContaining([carles]));
	});

	it('should property students have 3 length', () => {
		expect(jsonParsed.students).toHaveLength(3);
	});

	it('expected have a province called "Valencia"', () => {
		expect(jsonParsed).toHaveProperty('province');
		expect(jsonParsed).toHaveProperty('province', 'Valencia');
	});

	it('should have same text when showing in console', () => {
		const finalDAW = `{"year":2021,"city":"Gandia","school":"IES Maria Enriquez","active":true,"numberOfStudents":12,"teacher":{"name":"Xavi","car":{"brand":"Seat","model":"Leon","year":2015}},"students":[{"name":"Israel","age":34,"male":true,"hobbies":["Football","Programming","Cycling"]},{"name":"Victor","age":21,"male":true,"hobbies":["Basketball","Running","Gaming"]},{"name":"Carles","age":23,"male":true,"hobbies":["Football","Running","Gaming"]}],"province":"Valencia"}`;

		console.info = jest.fn();

		showJSON(jsonParsed);

		expect(console.info).toBeCalledWith(finalDAW);
	});
});
