window.addEventListener('unhandledrejection', (ev) => {
	console.error(`Unexpected Error  ${ev.reason}`);
});

function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
}

function show(start = 0) {
	const ms = 1000;
	const span = document.createElement('span');

	span.innerHTML = start;
	document.body.prepend(span);

	delay(ms)
		.then(() => {
			span.innerHTML = ++start;
			return delay(ms);
		})
		.then(() => {
			span.innerHTML = ++start;
			return delay(ms);
		})
		.then(() => {
			span.innerHTML = ++start;
			return delay(ms);
		})
		.then(() => {
			span.innerHTML = ++start;
			return delay(ms);
		})
		.then(() => {
			span.innerHTML = ++start;
		});
}

show();
