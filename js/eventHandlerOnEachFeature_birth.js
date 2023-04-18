//We start to create a number of functions that are called for each feature, using onEachFeature, within the L.geoJSON definition of var jsonLayerPublications
// We first define the highlightFeature funciton, that will be called on mouseover
var icon = new L.divIcon({className: 'mydivicon'});

var oms = new OverlappingMarkerSpiderfier(map);

var popup = new L.Popup();
oms.addListener('click', function(marker) {
  popup.setContent(marker.desc);
  popup.setLatLng(marker.getLatLng());
  map.openPopup(popup);
});

/*
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
function resetHighlight_birth (event) {
   //resetStyle is a geojson method that resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
   //The geojson layer must have been declared within a variable before this
   jsonLayer_birth.resetStyle(event.target);
};

function eventHandlerOnEachFeature_birth(feature, layer) {
    //takes a layer (or another object) and assigns to it one or more event (a list is available here https://developer.mozilla.org/en-US/docs/Web/Events#event_index)
    // with the respective event handler (the function to run when the event fires)
    layer.on({
         'mouseover': highlightFeature,
         'mouseout': resetHighlight_birth
     });
    //this create the popup for each feature in the layer, calling the properties of the feature as listed in the geoJSON
    // <strong> and </strong> indicate bold text, and <br> indicated next line. + is concatenation
    layer.bindPopup(
      '<p>'+'<strong>'+feature.properties.name+'</strong>'+
      '<br>'+'Luogo di nascita: '+feature.properties.labelbirthPlace_label+
      '<br>'+'Data di nascita: '+feature.properties.dateOfBirth_label+
      '<br>'+'<a href='+feature.properties.IRI+'>'+'Link'
      +'</p>'
    );
};
*/
map.createPane('pane_jsonLayer_birth');
map.getPane('pane_jsonLayer_birth').style.zIndex = 402;
map.getPane('pane_jsonLayer_birth').style['mix-blend-mode'] = 'normal';

var jsonLayer_birth =  L.geoJSON(born, {
  pane: 'pane_jsonLayer_birth',
  //set the style for the layer, using the function name present in layer_style.js
  style: style_birth,
  //onEachFeature: eventHandlerOnEachFeature_birth,
  onEachFeature: function (feature, latlng) {
    oms.addMarker(latlng);
  },
  // This is a option, and the value assigned to the key is a function.
  // The function calls as an argument the function eventHandlerOnEachFeature and on each feature.
  // pointToLayer is a function that will be used for creating layers for GeoJSON points (if not specified, simple markers will be created).
  pointToLayer: function (feature, latlng) {
      
      return L.marker(latlng, style_birth(feature));
  },
});
// We pass the variable jsonLayerPublications, created earlier, to the timeDimension method to manage geoJSON
var jsonLayer_birth_time =  L.TimeDimension.Layer.betweendates (jsonLayer_birth, {
  updateTimeDimensionMode: 'union', //changing this changes the way the point appear on the map
  duration: 'P0D',//how long the feature remains there until its time as passed
});
jsonLayer_birth_time.addTo(map);

var popup_birth = new L.Popup();
oms.addListener('click', function(marker) {
    popup_birth.setContent('<p>'+'<strong>'+marker.feature.properties.name+'</strong>'+'<br>'+'Luogo di nascita: '+marker.feature.properties.labelbirthPlace_label+'<br>'+'Data di nascita: '+marker.feature.properties.dateOfBirth_label+'<br>'+'<a href='+marker.feature.properties.IRI+'>'+'Link'+'</p>');
    popup_birth.setLatLng(marker.getLatLng());
    map.openPopup(popup_birth);
});
