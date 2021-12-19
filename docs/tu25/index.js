// Main HTML elements
const container = document.getElementById('prompt-form-container');
const form = document.getElementById('prompt-form');
const showButton = document.getElementById('show-button');

showButton.addEventListener('click', (event) => {
	showPrompt('Enter something<br>...smart \u{1f913}', function (value) {
		alert(value);
	});
});

/**
 * Show a half-transparent DIV to "shadow" the page
 * (the form is not inside, but near it, because it shouldn't be half-transparent)
 */
function showCover() {
	let coverDiv = document.createElement('div');
	coverDiv.id = 'cover-div';

	// make the page unscrollable while the modal form is open
	document.body.style.overflowY = 'hidden';

	document.body.append(coverDiv);
	container.style.display = 'block';
	form.elements.text.focus();
}

/**
 * Hide the modal form
 */
function hideCover() {
	document.getElementById('cover-div').remove();
	document.body.style.overflowY = '';
}

/**
 * function requested by the exercise
 * @param {*} html
 * @param {*} callback
 */
function showPrompt(html, callback) {
	form.querySelector('#prompt-message').innerHTML = html;
	showCover();
	processForm(callback);
}

function processForm(callback) {
	const ok = form[form.length - 2];
	const cancel = form[form.length - 1];
	let value = null;

	ok.addEventListener('click', acceptHandler);
	cancel.addEventListener('click', cancelHandler);

	document.addEventListener('keydown', (ev) => {
		if (ev.key == 'Enter') {
			acceptHandler(ev);
		}
		if (ev.key == 'Escape') {
			cancelHandler(ev);
		}
	});

	function acceptHandler(ev) {
		ev.preventDefault();
		value = form.elements.text.value;
		showDelete(callback, value);
	}

	function cancelHandler(ev) {
		showDelete(callback, value);
	}
}

function showDelete(callback, value) {
	callback('Value: ' + value);
	deleteForm();
}

function deleteForm() {
	form.remove();
	hideCover();
}
