import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@3/dist/js.cookie.min.mjs';

document.addEventListener('DOMContentLoaded', storageDataHandler);
document.addEventListener('keyup', storageDataHandler);

const button = document.querySelector('button');

button.addEventListener('click', (ev) => {
	ev.preventDefault();
	Cookies.remove('area');
	document.getElementById('area').value = '';
});

function storageDataHandler(ev) {
	const area = document.querySelector('textarea');

	if (area.value == '') {
		area.value = Cookies.get('area') ?? '';
	} else {
		Cookies.set('area', area.value, { expires: 60 / 24 }); // expires in 1 hour
	}
}
