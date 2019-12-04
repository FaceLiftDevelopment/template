var height = 0;
var width = 0;
var navoffset = 0;

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var denver = { lat: 39.7392, lng: -104.9903 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            center: denver , 
            zoom: 13, 
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: denver, map: map });
}

$(document).ready(function () {
    console.log("ready!");
    width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log(height);
  
    if (width > 600) {
      navoffset = 50;
    }
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      console.log(hash);

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - navoffset
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash - navoffset;
      });
    } // End if
  });
});