'use strict';

function printNumbers(from = 0, to = 5) {
	setTimeout(function tick() {
		console.log(from++);

		if (from <= to) {
			setTimeout(tick, 1000);
		}
	}, 1000);
}

printNumbers();
