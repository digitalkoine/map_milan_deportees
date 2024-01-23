//We start to create a number of functions that are called for each feature, using onEachFeature, within the L.geoJSON definition of var jsonLayerPublications
// We first define the highlightFeature funciton, that will be called on mouseover


function highlightFeature(event) {
  //target is an event property which returns the element that triggered the event
  var hoveredLayer = event.target;
  //set the new style that will be passed to the element that triggered the event
  hoveredLayer.setStyle({
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,0,1.0)',
        interactive: true,
    });
  // brings the layer to the top of all other layers
  hoveredLayer.bringToFront();
};

// Lastly, we define the resetHighlight functions, that will be called on mouseout. It is specific to each layer, because it reset that particular layer to its original style
function resetHighlight_arrest (event) {
   //resetStyle is a geojson method that resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
   //The geojson layer must have been declared within a variable before this
   jsonLayer_arrest.resetStyle(event.target);
};

function eventHandlerOnEachFeature_arrest(feature, layer) {
    //takes a layer (or another object) and assigns to it one or more event (a list is available here https://developer.mozilla.org/en-US/docs/Web/Events#event_index)
    // with the respective event handler (the function to run when the event fires)
    layer.on({
         'mouseover': highlightFeature,
         'mouseout': resetHighlight_arrest
     });
    //this create the popup for each feature in the layer, calling the properties of the feature as listed in the geoJSON
    // <strong> and </strong> indicate bold text, and <br> indicated next line. + is concatenation
    layer.bindPopup(
      '<p>'+'<strong>'+feature.properties.name+'</strong>'+
      '<br>'+'<strong>'+'Indirizzo di arresto (se disponibile): '+'</strong>'+feature.properties.labelarrestPlace+
      '<br>'+'<strong>'+'Data di arresto: '+'</strong>'+feature.properties.start_date_label
      +'<br>'+'<a href='+feature.properties.IRI+' target="_blank">'+'Link'
      +'</p>'
    );
};

map.createPane('pane_jsonLayer_arrest');
map.getPane('pane_jsonLayer_arrest').style.zIndex = 402;
map.getPane('pane_jsonLayer_arrest').style['mix-blend-mode'] = 'normal';

var jsonLayer_arrest =  L.geoJSON(arrested, {
  pane: 'pane_jsonLayer_arrest',
  //set the style for the layer, using the function name present in layer_style.js
  style: style_arrest,
  onEachFeature: eventHandlerOnEachFeature_arrest,
  // This is a option, and the value assigned to the key is a function.
  // The function calls as an argument the function eventHandlerOnEachFeature and on each feature.
  // pointToLayer is a function that will be used for creating layers for GeoJSON points (if not specified, simple markers will be created).
  pointToLayer: function (feature, latlng) {
    return L.shapeMarker(latlng, {
      shape: "square",
      radius: 3
    })
  }
});
// We pass the variable jsonLayerPublications, created earlier, to the timeDimension method to manage geoJSON
var jsonLayer_arrest_time =  L.TimeDimension.Layer.betweendates (jsonLayer_arrest, {
  updateTimeDimensionMode: 'union', //changing this changes the way the point appear on the map
  duration: 'P0D',//how long the feature remains there until its time as passed
});
jsonLayer_arrest_time.addTo(map);
