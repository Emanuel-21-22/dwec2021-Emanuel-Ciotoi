'use strict';

function unique(arr) {
	const setter = new Set(arr);

	return Array.from(setter);
}

export default unique;
