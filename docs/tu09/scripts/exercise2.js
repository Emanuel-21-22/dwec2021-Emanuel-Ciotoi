'use strict';

export default function getAverageAge(users) {
	let ages = 0;

	for (const user of users) {
		ages += user.age;
	}

	return ages / users.length;
}
