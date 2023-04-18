map.createPane('pane_jsonLayer_convoy');
map.getPane('pane_jsonLayer_convoy').style.zIndex = 410;
map.getPane('pane_jsonLayer_convoy').style['mix-blend-mode'] = 'normal';

function style_convoy_5(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(210,207,26,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 15.5,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_6(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(73,201,37,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_23t(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(21,239,235,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_9(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(21,239,235,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_10(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(201,23,204,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_3(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(117,140,217,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_12(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(34,239,153,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_13(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(96,72,212,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_14(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(125,231,144,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_15(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(215,61,27,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_35t(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(105,173,216,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_16(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(105,173,216,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_17(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(180,213,127,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_18(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(219,105,130,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_41t(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(146,26,237,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_19(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(146,26,237,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

function style_convoy_2(feature) {
return {
pane: 'pane_jsonLayer_convoy',
opacity: 1,
color: 'rgba(215,15,138,1.0)',
dashArray: '',
lineCap: 'round',
lineJoin: 'bevel',
weight: 1.0,
fillOpacity: 0,
interactive: true,
}
}

var jsonLayer_convoy_5 = L.geoJson(convoy_5,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_5,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_6 = L.geoJson(convoy_6,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_6,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_9 = L.geoJson(convoy_9,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_9,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_10 = L.geoJson(convoy_10,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_10,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_3 = L.geoJson(convoy_3,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_3,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_12 = L.geoJson(convoy_12,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_12,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_13 = L.geoJson(convoy_13,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_13,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_14 = L.geoJson(convoy_14,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_14,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_15 = L.geoJson(convoy_15,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_15,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_16 = L.geoJson(convoy_16,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_16,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_17 = L.geoJson(convoy_17,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_17,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_18 = L.geoJson(convoy_18,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_18,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_19 = L.geoJson(convoy_19,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_19,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_2= L.geoJson(convoy_2,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_2,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_23t= L.geoJson(convoy_23t,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_23t,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});

var jsonLayer_convoy_35t= L.geoJson(convoy_35t,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_35t,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});


var jsonLayer_convoy_41t= L.geoJson(convoy_41t,{
  onEachFeature: function(feature, layer) {
    var prevLayerClicked = null
    layer.bindPopup(
      '<p>'+'<strong>'+'Convoglio numero: '+feature.properties.convoyNumber+'</strong>'+
      '<p>'+feature.properties.description+
      '<br>'+'Lista: '+feature.properties.list_nati_milano+
      '</p>'
      );
      layer.setStyle({weight: feature.properties.quantity/2})
    },
  pane: 'pane_jsonLayer_convoy',
  style:style_convoy_41t,
  arrowheads: {
    yawn:'90',
    fill: false,
    frequency: '1',
    size: '10%'
  }
});
