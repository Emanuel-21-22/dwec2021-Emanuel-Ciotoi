import { MAXRATING, MINRATING } from './options.js';

const headerButton = document.querySelector('header button');
const acceptButton = document.querySelector('div#add-modal .btn--success');
const cancelButton = document.querySelector('div#add-modal .btn--passive');
const backdrop = document.getElementById('backdrop');

////////////////
//  Handlers  //
////////////////

// Named handlers
// TODO Check first data before accept
headerButton.addEventListener('click', modalHandler);
acceptButton.addEventListener('click', modalHandler);
cancelButton.addEventListener('click', modalHandler);
backdrop.addEventListener('click', modalHandler);

cancelButton.addEventListener('click', resetValueHandler);
backdrop.addEventListener('click', resetValueHandler);

acceptButton.addEventListener('click', checkInputHandler);

// TODO make the control when press the num key
// const inputRate = document.getElementById('rating');
// inputRate.addEventListener('keydown', (ev) => {});

/////////////////////////
//  Handler Functions  //
/////////////////////////

/**
 * Show/Hide modal box
 */
function modalHandler() {
	const backdropCL = backdrop.classList;
	const modalCL = document.getElementById('add-modal').classList;

	backdropCL.contains('visible')
		? backdropCL.remove('visible')
		: backdropCL.add('visible');

	modalCL.contains('visible')
		? modalCL.remove('visible')
		: modalCL.add('visible');
}

function checkInputHandler(ev) {
	const inputs = document
		.getElementById('add-modal')
		.getElementsByTagName('input');

	const name = inputs[0],
		rate = inputs[1],
		minrate = +rate.getAttribute('min') ?? MINRATING,
		maxrate = +rate.getAttribute('max') ?? MAXRATING;

	const rateValueOK = numberBetween(rate.valueAsNumber, minrate, maxrate);

	if (rate.valueAsNumber != rateValueOK) {
		alert(
			`Please enter valid values (rating between ${minrate} and ${maxrate}).`
		);
		// TODO don't hide modal in alert
		modalHandler();
		valueReset(rate);
	} else {
		addListElementHandler(name.value, rateValueOK, maxrate);
		resetValueHandler();
	}
}

/**
 *
 * @param {String} name Name value of movie
 * @param {Number} rate Rate value of movie
 * @param {Number} maxrate Max rate value of movie
 */
function addListElementHandler(name = '', rate, maxrate) {
	if (name != '' && +rate) {
		const list = document.getElementById('movie-list');
		const li = createListElement(name, rate, maxrate);

		list.append(li);

		checkListElements();
	}
}

function resetValueHandler() {
	const inputs = document
		.getElementById('add-modal')
		.getElementsByTagName('input');

	valueReset(inputs);
}

/////////////////////////
//  Generic Functions  //
/////////////////////////

/**
 *
 * @param {String} name
 * @param {Number} rate
 * @param {Number} maxrate
 * @returns
 */
function createListElement(name, rate, maxrate) {
	const li = document.createElement('li');
	const div = document.createElement('div');

	div.classList.add('movie-element__info');

	div.innerHTML = `<h2>${name}</h2><p>${rate}/${maxrate} stars</p>`;

	li.classList.add('movie-list', 'movie-element', 'card');
	li.prepend(div);

	li.addEventListener('click', (ev) => {
		ev.preventDefault();
		ev.currentTarget.remove();
		checkListElements();
	});

	return li;
}

function checkListElements() {
	const defTextStyle = document.getElementById('entry-text').style;
	const list = document.getElementById('movie-list');

	list.hasChildNodes()
		? (defTextStyle.display = 'none')
		: (defTextStyle.display = 'inherit');
}

/**
 * Arrow `fn` that returns a  number between min/max or min/max value
 * @param {Number} number
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
const numberBetween = (number, min, max) =>
	number >= min ? (number <= max ? number : max) : min;

/**
 * Reset the values of any HTML Collection or HTML Inputs
 * @param {HTMLCollection|HTMLInputElement} elemHTML
 */
function valueReset(elemHTML) {
	elemHTML instanceof HTMLCollection
		? Object.entries(elemHTML).forEach((elem) => {
				elem[1].value = null;
		  })
		: (elemHTML.value = null);
}
