const button = document.getElementById('hider');
const text = document.getElementById('text');

button.addEventListener('click', () => {
	text.style.visibility = 'hidden';
});

// Extra functionality
button.addEventListener('blur', () => {
	const visible = text.style.visibility;
	text.style.visibility = visible == 'visible' ? 'hidden' : 'visible';
});
