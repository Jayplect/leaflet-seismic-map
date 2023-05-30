//-------------------------------------------MONTHLY EARTHQUAKE MAP---------------------------------------------//

// Store our API endpoint as queryUrl.
const queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.features);
  });

// Create features for Map
function createFeatures(earthquakeData) {
// Define a function that we want to run once for each feature in the features array.
// Give each feature a popup that describes the place and time of the earthquake.
    function onEachFeature(feature, layer) {
            layer.bindPopup(
                `<h3>${feature.properties.place}</h3>
                <p>${new Date(feature.properties.time)}</p><hr>
                <p><b>Depth:</b> ${feature.geometry.coordinates[2]}</p>
                <p><b>Magnitude:</b> ${feature.properties.mag}</p>`
            ),
            layer.on({
                // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
                mouseover: function(event) {
                layer = event.target;
                layer.setStyle({
                fillOpacity: 0.7
            })},
            // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
                mouseout: function (event) {
                layer = event.target;
                layer.setStyle({
                fillOpacity: 0.5
            });
          }
       })
     }

    // Define a markerSize() function that will give each city a different radius based on its population.
    function markerSize(magnitude){
        return Math.sqrt(magnitude)*5}

    // Create a GeoJSON layer that contains the features array on the earthquakeData object.
        // Run the onEachFeature function once for each piece of data in the array.
        let earthquakes = L.geoJSON(earthquakeData, {
            onEachFeature: onEachFeature,
            pointToLayer: markerOptions
        });
        // Send our earthquakes layer to the createMap function/
        createMap(earthquakes);

    // Creating a marker feature
    function markerOptions (feature, latlng){
        var options = {
                radius: markerSize(feature.properties.mag),
                fillColor: chooseColor(feature.geometry.coordinates[2]),
                color: chooseColor(feature.geometry.coordinates[2]),
                weight: 0.1,
                opacity: 1,
                fillOpacity: 0.8
    }
    return L.circleMarker(latlng, options);
}};

    // Create a function to determine the depth of the earthquake by color
    function chooseColor(depth) {
            if (depth < 5) {return "#fcfa28"}
            else if (depth < 10) {return "#fcdd28"}
            else if (depth < 25) {return "#fca928"}
            else if (depth <  50) {return "#fc6828"}
            else  {return "#a61928"}
};

// Create the baselayer and overlay maps
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
        center: [37.09, -95.71],
        zoom: 3,
        layers: [street, earthquakes]
    });
    // Create a layer control. Pass it our baseMaps and overlayMaps.
    // Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap)

// Setting up the legend for earthquake magnitude.
var legend = L.control({position: 'bottomright'});

legend.onAdd = function () {
    
    var div = L.DomUtil.create('div', 'info legend'),
        depth = [-10, 5, 10, 25, 50],
        labels = [];

    // loop through our magnitude intervals and generate a label with a colored square for each interval
    for (let i = 0; i < depth.length; i++) {
            from = depth[i];
            to = depth[i + 1];

            labels.push(
            '<i style="background:' + chooseColor(from ) + '"></i> ' +
            from + (to ? '&ndash;' + to +'<br>' : '+'));
            }

        // Add labels to div text
        div.innerHTML += labels.join("") ;
        return div;
    };
  // Adding the legend to the map
  legend.addTo(myMap);
}
