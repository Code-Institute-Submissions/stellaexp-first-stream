function add(param1, param2) {
	return param1 + param2;
}

function callAlert(message) {
	alert(message);
}

function isRestaurantOpen(day, time) {
	// return true/false;
	var daysClosed = [
		'SUN',
	];

	if (day === 'SUN') {
		return false;
	}

	return true;
}

 var map;
function initMap() {
    var uluru = {lat: 51.553134, lng: -0.0700};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });

    google.maps.event.addDomListener(window, "resize", function() {
       var center = map.getCenter();
       google.maps.event.trigger(map, "resize");
       map.setCenter(center); 
    });
}

// todo add google maps source