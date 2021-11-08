export const getMostPopulatedCity = (...cities) => {
	let name = null,
		cant = 0;
	cities.map((e) => {
		if (cant < e.population) {
			name = e.name;
			cant = e.population;
		}
	});

	return name;
};
