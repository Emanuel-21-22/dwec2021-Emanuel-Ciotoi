import { getMostPopulatedCity as gMPC } from '../../../docs/tu14/scripts/exercise1';

describe('Rest and Spread Test Suite', () => {
	/* Population in Spain on 1/1/2020 */
	const cityPopulationSpain = [
		{ name: 'Sagunto', population: 67173 },
		{ name: 'Vigo', population: 296692 },
		{ name: 'Las Palmas de Gran Canaria', population: 381223 },
		{ name: 'Alcoy', population: 59354 },
		{ name: 'Bilbao', population: 350184 },
		{ name: 'Segovia', population: 52057 },
		{ name: 'Badalona', population: 223166 },
		{ name: 'El Prat de Llobregat', population: 65385 },
		{ name: 'Zaragoza', population: 681877 },
		{ name: 'Valencia', population: 800215 },
		{ name: 'Elche', population: 234765 },
	];

	/* Population urban area in World */
	const cityPopulationWorld = [
		{ name: 'Paris', population: 11400000 },
		{ name: 'New York', population: 22100000 },
		{ name: 'Los Angeles', population: 17700000 },
		{ name: 'Tokio', population: 40400000 },
		{ name: 'Osaka', population: 17700000 },
		{ name: 'Calcutta', population: 16800000 },
	];

	it('should returns as Valencia as the most populated city of array Spain', () => {
		expect(gMPC(...cityPopulationSpain)).toBe('Valencia');
	});

	it('should returns Tokio as the most populated city of array cities', () => {
		const popEsWorld = [
			{ name: 'Gandia', population: 75798 },
			...cityPopulationSpain,
			...cityPopulationWorld,
		];
		expect(gMPC(...popEsWorld, { name: 'Moscow', population: 17300000 })).toBe(
			'Tokio'
		);
	});

	test('returns null when have nothing', () => {
		expect(gMPC()).toBeNull();
	});

	test('returns null when have other object', () => {
		expect(gMPC(cityPopulationWorld)).toBeNull();
	});
});
