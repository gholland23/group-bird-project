// Create an initial map object
// // Set the longitude, latitude, and the starting zoom level
// var myMap = L.map("map").setView([45.52, -122.67], 13);
var myMap = L.map("map", {
    center: [35.00, -97.09],
    zoom: 2
  });
  
  // Add a tile layer (the background map image) to our map
  // Use the addTo method to add objects to our map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // GEOFFS MARKERS
  var condorMarker = L.marker([30.84, -115.28], {
    title: "California Condor"
    }).addTo(myMap);
  
  var capeMayMarker = L.marker([45.0522, -82.4846], {
    title: "Cape May Warbler"
    }).addTo(myMap);
  
  var cockatooMarker = L.marker([-25.27, 133.77], {
    title: "Cockatoo"
    }).addTo(myMap);
  
  var crestedAukletMarker = L.marker([52.12, -174.12], {
    title: "Crested Auklet"
    }).addTo(myMap);
  
  var easternRosellaMarker = L.marker([-37.81, 144.96], {
    title: "Eastern Rosella"
    }).addTo(myMap);
  
  var elegantTragoonMarker = L.marker([31.48, -110.40], {
    title: "Elegant Tragoon"
    }).addTo(myMap);
  
  
  //geoff's migrations
  //Condor non migratory
  //cockatoo non migratory
  //eastern rosella non migratory
  //elegant tragoon nonmigratory
  var capeMayLine = [
    [45.05, -82.48],
    [21.469, -78.656]
  ];
  L.polyline(capeMayLine, {
    color: "green"
  }).addTo(myMap);
  
  var crestedAukletLine = [
    [52.12, -174.12],
    [57.49, -153.49]
  ];
  L.polyline(crestedAukletLine, {
    color: "red"
  }).addTo(myMap);
  
  //Josh Markers
  var marker = L.marker([47.0641, -70.7964],{title: "Evening Grosbeak"}).addTo(myMap);
  var marker = L.marker([-21.1608, -66.752],{title: "Flame Tanager"}).addTo(myMap);
  var marker = L.marker([27.6648, -81.5158],{title: "Flamingo"}).addTo(myMap);
  var marker = L.marker([16.5388, -23.0418],{title: "Frigate"}).addTo(myMap);
  var marker = L.marker([40.7891, -73.135],{title: "Glossy Ibis"}).addTo(myMap);
  
  // //Josh Lines
  var egline = [[47.0641, -70.7964], [17.0732, -96.7266]];
  L.polyline(egline, {
    color: "green"
  }).addTo(myMap);
  var ftline = [[-21.1608, -66.752], [53.1355, -57.6604]];
  L.polyline(ftline, {
    color: "red"
  }).addTo(myMap);
  var flamingoline = [[27.6648, -81.5158], [-35.6751, -71.5430]];
  L.polyline(flamingoline, {
    color: "green"
  }).addTo(myMap);
  var frigateline = [[16.5388, -23.0418],[32.1656, -82.9001]];
  L.polyline(frigateline, {
    color: "red"
  }).addTo(myMap);
  var glossyline = [[40.7891, -73.135],[23.6345, -102.5280]];
  L.polyline(glossyline, {
    color: "green"
  }).addTo(myMap);
  
  
  //ben markers
  var marker = L.marker([39.01, -98.48], {
    title: "Western Meadowlark"
    }).addTo(myMap);
  var marker = L.marker([37.96, -91.83], {
    title: "Wild Turkey"
    }).addTo(myMap);
  var marker = L.marker([0.1693, -131.0394], {
    title: "Wilsons Bird of Paradise"
    }).addTo(myMap);
  var marker = L.marker([40.05, -74.40], {
    title: "Wood Duck"
    }).addTo(myMap);
  var marker = L.marker([40.28, -110.71], {
    title: "Yellow Headed Blackbird"
    }).addTo(myMap);
  
  
  //bens migration
  
  var westernLine = [
    [39.01, -98.48],
    [28.633, -106.96]
  ];
  L.polyline(westernLine, {
    color: "green"
  }).addTo(myMap);
  var wildTurkeyLine = [
    [37.96, -91.83],
    [57.96, -101.83]
  ];
  L.polyline(wildTurkeyLine, {
    color: "red"
  }).addTo(myMap);
  var woodDuckLine= [
    [40.05, -74.40],
    [26.14, -81.79]
  ];
  L.polyline(woodDuckLine, {
    color: "green"
  }).addTo(myMap);
  var yellowHeadedLine = [
    [40.28, -110.71],
    [-12.04, -77.04]
  ];
  L.polyline(yellowHeadedLine, {
    color: "green"
  }).addTo(myMap);
  
  

  
  //NAM markers
  var marker = L.marker([25.27, -133.77], {
    title: "Albatross"
    }).addTo(myMap);
  var marker = L.marker([20.59, -78.96], {
    title: "Alexandrine Parakeet"
    }).addTo(myMap);
  var marker = L.marker([44.21, -54.53], {
    title: "American Avocet"
    }).addTo(myMap);
  var marker = L.marker([43.06, -105.26], {
    title: "American Bittern"
    }).addTo(myMap);
  var marker = L.marker([46.65, -99.00], {
    title: "American Goldfinch"
    }).addTo(myMap);
  var marker = L.marker([26.44, -82.11], {
    title: "Anhinga"
    }).addTo(myMap);
  //NAM migration
  var ablatrossLine = [
    [25.27, -133.77],
    [19.07, -96.73]
  ];
  L.polyline(ablatrossLine, {
    color: "green"
  }).addTo(myMap);
  var americanavocetLine = [
    [44.21, -54.53],
    [-35.68, -71.53]
  ];
  L.polyline(americanavocetLine, {
    color: "green"
  }).addTo(myMap);
  var americanbitternLine = [
    [43.06, -105.26],
    [32.17, -82.90]
  ];
  L.polyline(americanbitternLine, {
    color: "green"
  }).addTo(myMap);
  var americanFinchLine = [
    [46.65, -99.00],
    [23.64, -102.53]
  ];
  L.polyline(americanFinchLine, {
    color: "green"
  }).addTo(myMap);
  var anhingaLine = [
    [26.44, -82.11],
    [-34.41, 63.61]
  ];
  L.polyline(anhingaLine, {
    color: "green"
  }).addTo(myMap);
  
  //LAURA MARKERS
  var marker = L.marker([64.20, -149.49], {
    title: "Golden Eagle"
    }).addTo(myMap);
  var marker = L.marker([-33.87, 151.21], {
  title: "Gouldian Finch"
  }).addTo(myMap);
  var marker = L.marker([27.50, -99.50], {
  title: "Green Jay"
  }).addTo(myMap);
  var marker = L.marker([44.40, -110.59], {
  title: "Osprey"
  }).addTo(myMap);
  var marker = L.marker([19.06, 13.54], {
  title: "Ostrich"
  }).addTo(myMap);
  var marker = L.marker([35.25, -75.54], {
    title: "Painted Buntig"
    }).addTo(myMap);
  var marker = L.marker([10.48, -66.90], {
  title: "Paradise Tanager"
  }).addTo(myMap);
  var marker = L.marker([46.23, 2.21], {
    title: "Parus Major"
    }).addTo(myMap);
  //LAURA migration
  var goldeneagleLine = [
    [64.20, -149.49],
    [45.55, -72.57]
  ];
  L.polyline(goldeneagleLine, {
    color: "green"
  }).addTo(myMap);
  var gouldianFinchLine = [
    [-33.87, 151.21],
    [-40.90, 174.88]
  ];
  L.polyline(gouldianFinchLine, {
    color: "green"
  }).addTo(myMap);
  var greenJayLine = [
    [27.50, -99.50],
    [18.10, -77.29]
  ];
  L.polyline(greenJayLine, {
    color: "green"
  }).addTo(myMap);
  var ospreyLine = [
    [44.40, -110.59],
    [1.83, -78.18]
  ];
  L.polyline(ospreyLine, {
    color: "green"
  }).addTo(myMap);
  var paintedBuntigLine = [
    [35.25, -75.54],
    [19.43, -99.13]
  ];
  L.polyline(paintedBuntigLine, {
    color: "green"
  }).addTo(myMap);
  var paradiseTanagerLine = [
    [10.48, -66.90],
    [8.53, -80.78]
  ];
  L.polyline(paradiseTanagerLine, {
    color: "green"
  }).addTo(myMap);

  //migrate south = green
  //migrate north = red
  //migrate east = purple
  //migrate west = pink
  