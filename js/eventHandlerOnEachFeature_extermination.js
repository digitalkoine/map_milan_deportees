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

function resetHighlight_extermination (event) {
   //resetStyle is a geojson method that resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
   //The geojson layer must have been declared within a variable before this
   jsonLayer_extermination_camps.resetStyle(event.target);
};

function eventHandlerOnEachFeature_extermination(feature, layer) {
    //takes a layer (or another object) and assigns to it one or more event (a list is available here https://developer.mozilla.org/en-US/docs/Web/Events#event_index)
    // with the respective event handler (the function to run when the event fires)
    layer.on({
         'mouseover': highlightFeature,
         'mouseout': resetHighlight_extermination
     });
    //this create the popup for each feature in the layer, calling the properties of the feature as listed in the geoJSON
    // <strong> and </strong> indicate bold text, and <br> indicated next line. + is concatenation
    layer.bindPopup(
      '<h3>'+'<strong>'+feature.properties.labelToNaziCamp+'</strong>'+'</h3>'+
      '<p>'+'<strong>'+feature.properties.quantity+'</strong>'+' persone dal nostro dataset sono state internate nel campo a '+
      '<strong>'+feature.properties.convoyArrivalDate2+'</strong>'+'</p>'
    );
};

map.createPane('pane_jsonLayer_extermination_camps');
map.getPane('pane_jsonLayer_extermination_camps').style.zIndex = 404;
map.getPane('pane_jsonLayer_extermination_camps').style['mix-blend-mode'] = 'normal';

var jsonLayer_extermination_camps =  L.geoJSON(extermination_camps, {
  pane: 'pane_jsonLayer_extermination_camps',//set the style for the layer, using the function name present in layer_style.js
  style: style_extermination_camps,
  // This is a option, and the value assigned to the key is a function.
  // The function calls as an argument the function eventHandlerOnEachFeature and on each feature.
  onEachFeature: eventHandlerOnEachFeature_extermination,
  // pointToLayer is a function that will be used for creating layers for GeoJSON points (if not specified, simple markers will be created).
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng,{
     // This sets the radius of the circle, using L.circleMarker and pointToLayer. Note that the radius must not be defined in the style, otherwise this get overwriten.
     radius: (Math.log2(feature.properties.tot_quantity)+1)*4
   })
  }
});
// We pass the variable jsonLayerPublications, created earlier, to the timeDimension method to manage geoJSON
var jsonLayer_extermination_camps_time =  L.TimeDimension.Layer.betweendates (jsonLayer_extermination_camps, {
  updateTimeDimensionMode: 'union', //changing this changes the way the point appear on the map
  duration: 'P0D',//how long the feature remains there until its time as passed
});
jsonLayer_extermination_camps_time.addTo(map);
