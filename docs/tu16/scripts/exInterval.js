'use strict';

function printNumbers(from = 0, to = 5) {
	const timerId = setInterval(() => {
		console.log(from++);

		if (from >= to) {
			clearInterval(timerId);
		}
	}, 1000);
}

printNumbers();
