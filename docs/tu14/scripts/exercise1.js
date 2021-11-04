export const getMostPopulatedCity = (...obj) => {
	let name = null,
		cant = 0;
	obj.map((e) => {
		if (cant < e.population) {
			name = e.name;
			cant = e.population;
		}
	});

	return name;
};
