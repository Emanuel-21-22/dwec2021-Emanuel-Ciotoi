document.addEventListener('DOMContentLoaded', () => {
	const button = document.querySelector('input[type]');
	button.addEventListener('click', (e) => {
		e.target.style.visibility = 'hidden';
		console.log(e);
	});
});
