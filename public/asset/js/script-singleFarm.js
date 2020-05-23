function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51, 0),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

myMap();