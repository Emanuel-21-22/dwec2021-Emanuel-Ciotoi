import { createInput, retrieveData } from './business/logic.js';

const addButton = document.getElementById('add');
const retrieveButton = document.getElementById('ret');

addButton.addEventListener('click', addInputHandler);
retrieveButton.addEventListener('click', controlDataHandler);

/**
 * @param {MouseEvent} ev
 */
function addInputHandler(ev) {
	ev.preventDefault();

	const listInputs = document.querySelector('div#users');
	const input = createInput(listInputs);

	listInputs.append(input);
}

/**
 * @param {MouseEvent} ev
 */
async function controlDataHandler(ev) {
	ev.preventDefault();

	const listInputs = document.getElementsByTagName('input');
	let listSpans = document.getElementsByTagName('span');

	if (listSpans.length !== 0) {
		clearSpans(listSpans);
	}

	listSpans = makeSpans(listInputs);
	const listNames = await retrieveData(listInputs);

	printNames(listSpans, listNames);
}

/**
 * Create HTMLSpanElement/s
 * @param {HTMLCollectionOf<HTMLInputElement>} inputs HTMLCollection with HTMLInputElements
 */
function makeSpans(inputs) {
	const spans = [];

	for (const key in inputs) {
		if (Object.hasOwnProperty.call(inputs, key)) {
			const span = document.createElement('span');

			span.id = inputs[key].getAttribute('id');
			inputs[key].after(span);
			spans.push(span);
		}
	}

	printLoad(spans);
	return spans;
}

function clearSpans(spans) {
	for (const span of spans) {
		span.remove();
	}
}

function printNames(spans, listNames) {
	Array.from(spans).forEach((currEl, i) => {
		currEl.innerText = listNames[i];
	});
}

function printLoad(spans) {
	for (const span of spans) {
		span.innerText = 'Loading...';
	}
}
