function openMapWithCurrentLocation() {
 

    // Construct Google Maps Directions URL with the current location automatically taken by Google Maps
    const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${presentBusLocation[0]},${presentBusLocation[1]}&travelmode=driving&dir_action=navigate`;

    // Open Google Maps with the directions URL in a new tab or app
    window.open(mapUrl, "_blank");
}

// Event listener for the button to open maps
document
    .getElementById("directionsGoogleMap")
    .addEventListener("click", openMapWithCurrentLocation);
