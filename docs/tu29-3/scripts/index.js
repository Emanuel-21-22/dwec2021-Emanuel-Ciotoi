function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
}

/**
 * @param {Number} ms Milliseconds to display the number
 * @param {Number} max Number of loops
 */
async function show(ms = 1000, max = 10) {
	let start = 0;
	const span = document.createElement('span');
	span.innerHTML = start;
	document.body.append(span);

	do {
		try {
			await delay(ms);
			span.innerHTML = ++start;
		} catch (err) {
			console.error(err.message);
		}
	} while (start < max);
}

show(2000, 4);
