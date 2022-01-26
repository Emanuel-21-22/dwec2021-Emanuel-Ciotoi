/**
 * Creates the map
 * @param {*} latitude
 * @param {*} longitude
 * @returns returns the map
 */
function initMap(latitude, longitude) {
	const map = L.map('map').setView([latitude, longitude], 13);

	L.tileLayer(
		'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
		{
			attribution:
				'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 12,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1,
			accessToken:
				'pk.eyJ1IjoieGF2aTEycC1wcm9mZSIsImEiOiJja3kxbnhrZjAwZDdkMnhybTVheWpzOXVrIn0.6tgSdQGqA4w9VQ0kY4xrlA',
		}
	).addTo(map);

	return map;
}

/**
 * Position the coords in the map with a marker
 * @param {*} map
 * @param {*} latitude
 * @param {*} longitude
 * @param {*} marker
 * @returns
 */
function changePosition(map, latitude, longitude, marker) {
	map.setView([latitude, longitude], 13);
	if (marker) {
		marker.removeFrom(map);
	}
	const newMarker = L.marker([latitude, longitude]).addTo(map);
	return newMarker;
}

function initGeolocation() {
	if (navigator.geolocation) {
		const map = navigator.geolocation.getCurrentPosition(
			(position) =>
				initMap(position.coords.latitude, position.coords.longitude),
			errorMap,
			{ maximumAge: 20_000, timeout: 15_000 }
		);

		return navigator.geolocation.watchPosition((position) => {
			if (map.marker) {
				marker = changePosition(
					map,
					position.coords.latitude,
					position.coords.longitude,
					map.marker
				);
				marker.addTo(map);
			}
			const mapViewer = document.getElementsByTagName('div')[0];
			mapViewer.innerHTML = map;
		}, errorMap);
	}
}

function errorMap() {
	console.error('No position available');
}

function checkPermission() {
	if (!Notification) {
		console.error('This browser does not support notifications');
	} else {
		Notification.requestPermission().then(() => {
			handlePermission();
		});
	}
}

function handlePermission() {
	const notifyButton = document.querySelector('div.notify');
	const watchID = initGeolocation();

	if (
		Notification.permission === 'denied' ||
		Notification.permission === 'default'
	) {
		notifyButton.style.display = 'block';
	} else {
		notifyButton.style.display = 'none';

		const notification = new Notification(
			'The active geolocation was already start',
			{
				body: 'Click to deactivate it',
			}
		);

		document.addEventListener('visibilitychange', (ev) => {
			navigator.geolocation.clearWatch(watchID);

			notifyButton.previousElementSibling.innerHTML =
				'The active geolocation has stopped';

			if (document.visibilityState === 'visible') {
				notification.close();
			}
		});
	}
}

(() => {
	const notifyButton = document.querySelector('div.notify > button');

	notifyButton.addEventListener('click', (ev) => {
		ev.preventDefault();
		checkPermission();
	});
})();
