'use strict';

export function topSalary(salaries) {
	if (Object.entries(salaries).length != 0) {
		let topName,
			topSal = 0;

		for (const [key, value] of Object.entries(salaries)) {
			if (topSal <= value) {
				topSal = value;
				topName = key;
			}
		}

		return topName;
	}

	return null;
}
