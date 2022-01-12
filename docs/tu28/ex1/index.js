document.addEventListener('DOMContentLoaded', storageDataHandler);
document.addEventListener('input', storageDataHandler);

const button = document.querySelector('button');

button.addEventListener('click', (ev) => {
	ev.preventDefault();
	localStorage.removeItem('area');
	document.getElementById('area').value = '';
});

function storageDataHandler(ev) {
	const area = document.querySelector('textarea');

	if (area.value == '') {
		area.value = localStorage.getItem('area') ?? '';
	} else {
		localStorage.setItem('area', area.value);
	}
}
