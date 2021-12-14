const layer1 = document.getElementById('capa1');
const layer2 = document.getElementById('capa2');

layer1.setAttribute('draggable', 'true');

// Layers' Events

layer1.addEventListener('dragstart', function (event) {
	this.style.opacity = '0.5';
	changeBGColor('yellow');
});

layer1.addEventListener('dragend', (event) => {
	event.target.style.opacity = '';
	changeBGColor('yellow');
});

layer2.addEventListener('dragenter', (event) => {
	changeBGColor('red');
});

layer2.addEventListener('dragleave', (event) => {
	changeBGColor();
});

layer2.addEventListener('dragover', (event) => {
	event.preventDefault();
});

layer2.addEventListener('drop', (event) => {
	layer1.remove();
	changeBGColor('yellow');
	event.currentTarget.innerHTML = 'You have achieved it!';
});

/**
 * Change element background color
 * @param {String} color Code name color to change
 */
function changeBGColor(color = '') {
	event.currentTarget.style.backgroundColor = color;
}
