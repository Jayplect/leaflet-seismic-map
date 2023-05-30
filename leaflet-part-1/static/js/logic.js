//-------------------------MONTHLY EARTHQUAKE MAP-------------------------//

// Store our API endpoint as queryUrl.
const queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"

// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.features);
  });

// 
function createFeatures(earthquakeData) {
// Define a function that we want to run once for each feature in the features array.
// Give each feature a popup that describes the place and time of the earthquake.
    function onEachFeature(feature, layer) {
            layer.bindPopup(
                `<h3>${feature.properties.place}</h3>
                <hr><p>${new Date(feature.properties.time)}</p>`
    )};

    // Define a markerSize() function that will give each city a different radius based on its population.
    function markerSize(magnitude){
        return Math.sqrt(magnitude)*3}

    // Creating a marker
    function markerOptions (feature, latlng){
        var options = {
                    radius: markerSize(feature.properties.mag),
                    fillColor: chooseColor(feature.geometry.coordinates[2]),
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
        }
        return L.circleMarker(latlng, options);
};

    // Create a GeoJSON layer that contains the features array on the earthquakeData object.
        // Run the onEachFeature function once for each piece of data in the array.
        let earthquakes = L.geoJSON(earthquakeData, {
            onEachFeature: onEachFeature,
            pointToLayer: markerOptions
        });
        // Send our earthquakes layer to the createMap function/
        createMap(earthquakes);
};

    // Create a function to determine the depth of the earthquake by color
    function chooseColor(depth) {
            if (depth < 50) {return "rgb(230, 255, 230)"}
            else if (depth < 100) {return "rgb(153, 255, 153)"}
            else if (depth < 300) {return "rgb(77, 255, 77)"}
            else if (depth <  800) {return "rgb(0, 179, 0)"}
            else  {return "rgb(0, 102, 0)"}
};

// 
function createMap(earthquakes) {

    // Create the base layer.
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
    
    // Create a baseMaps object.
    let baseMaps = {
        "Street Map": street
    };
    
    // Create an overlay object to hold our overlay.
    let overlayMaps = {
        "Earthquakes": earthquakes
    };
    
    // Create our map, giving it the streetmap and earthquakes layers to display on load.
    // And Add to the div tag
    let myMap = L.map("map", {
        center: [37.09, -80],
        zoom: 2,
        layers: [street, earthquakes]
    });
    
    // Create a layer control.
    // Pass it our baseMaps and overlayMaps.
    // Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

};
