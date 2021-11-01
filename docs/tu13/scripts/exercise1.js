const jsonTest = `{
	"year": 2021,
	"city": "Gandia",
	"school": "IES Maria Enriquez",
	"active": true,
	"numberOfStudents": 12,
	"teacher": {
		"name": "Xavi",
		"age": 46,
		"car": {
			"brand": "Seat",
			"model": "Leon",
			"year": 2015
		}
	},
	"students": [
		{
			"name": "Israel",
			"age": 34,
			"male": true,
			"hobbies": ["Football", "Programming", "Cycling"]
		},
		{
			"name": "Victor",
			"age": 21,
			"male": true,
			"hobbies": ["Basketball", "Running", "Gaming"]
		}
	]
}`;

/**
 * @param {JSON} jsonString
 * @returns
 */
function transformJson(jsonString) {
	const jsonParsed = JSON.parse(jsonString);

	delete jsonParsed.teacher.age;

	jsonParsed.students.push({
		name: 'Carles',
		age: 23,
		male: true,
		hobbies: ['Football', 'Running', 'Gaming'],
	});

	jsonParsed.province = 'Valencia';

	return jsonParsed;
}

/**
 * @param {JSON} jsonObject
 */
const showJSON = (jsonObject) => {
	console.info(JSON.stringify(jsonObject));
};

// const modified = transformJson(jsonTest);

// showJSON(modified);

export { transformJson, showJSON };
