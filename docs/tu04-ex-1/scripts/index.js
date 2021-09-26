'use strict';

const numMax = 100,
	numMin = 1;
let again = true;

while (again == true) {
	let guessNum = parseInt(Math.random() * (numMax - numMin) + numMin),
		count = 0,
		userNum;
	console.log(guessNum);

	// A number will be requested until a match is made, and attempts will be taken into count.
	do {
		userNum = parseInt(
			prompt(`Give me a number between ${numMin} and ${numMax}`)
		);

		++count;

		if (userNum < numMin || userNum > numMax || userNum !== guessNum) {
			alert(
				`Try again\nIntroduce a number between ${numMin} and ${numMax}`
			);
		}
	} while (userNum !== guessNum);

	if (count == 1)
		alert(`Congratulations!!!\nYou have succeeded in ${count} attempt`);
	else alert(`Congratulations!!!\nYou have succeeded in ${count} attempts`);

	// It is not necessary to put "y", you can continue in blank
	let userQuestion = prompt('Do you want continue? y/n');

	if (userQuestion == 'n') {
		again = false;
		console.log('End Game');
	}
}
