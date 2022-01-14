import delay from './exercise1-fn.js';

const span = document.createElement('span');

span.innerHTML = 'Loading';
document.body.append(span);

delay(2000).then(() => {
	span.innerHTML = 'Completed';
});
