window.addEventListener('keyup', changeImage, true);

/**
 * @param {KeyboardEvent} event
 */
function changeImage(event) {
	const image = document.getElementById('imagen');

	if (event.key == 'F12' && event.altKey) {
		image.style.background = '';
		image.style.backgroundImage = "url('https://source.unsplash.com/random')";
	}
}
