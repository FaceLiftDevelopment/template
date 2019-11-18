// Initialize and add the map
function initMap() {
    // The location of Uluru
    var denver = { lat: 39.7392, lng: -104.9903 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 13, center: denver });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: denver, map: map });
}