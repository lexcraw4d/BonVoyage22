
let map;
let localContextMapView;
var apiKey = config.API_KEY;

function initMap() {
	localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById('map'),
    placeTypePreferences: [
    //   { type: "primary_school" },
    //   { type: "tourist_attraction" },
    //   { type: "amusement_park" },
      { type: "stadium" }
    ],
    maxPlaceCount: 12,
  });
  map = localContextMapView.map;
  map.setOptions({
    center: { lat: 30.2672, lng: -97.7431 },
    zoom: 14,
  });
}

async function searchAddress() {
	try {
		const address = document.getElementById('address').value;
		const addressUrlEncoded = encodeURIComponent(address);
		console.log('addressurlencoded', addressUrlEncoded)
		const resp = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${addressUrlEncoded}`
		);
		const body = await resp.json();
		console.log(body);
		if (body.status !== 'OK' || body.results?.length === 0) {
			return alert('Address not found. Check for typos.');
		}
		const location = body.results[0].geometry.location;
		map.setCenter(location);
		localContextMapView.search();
		console.log(localContextMapView.placeTypePreferences)
		// Here you can update the list of attractions (via checkboxes)
		localContextMapView.placeTypePreferences = ["stadium"];
	} catch (err) {
		console.log('Error with searchAddress: ', err);
	}
}