function style_extermination_camps_postwar_survived (feature) {
  return {
      pane:'pane_jsonLayer_extermination_camps_postwar_survived',
      opacity: 1,
      color: 'rgba(0,0,0,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1,
      fill: true,
      fillOpacity: 1,
      fillColor: 'green',
      interactive: true,
    }
  }

function style_extermination_camps_postwar_deceased (feature) {
  return {
      pane:'pane_jsonLayer_extermination_camps_postwar_deceased',
      opacity: 1,
      color: 'rgba(0,0,0,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1,
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(50,50,50,1.0)',
      interactive: true,
    }
  }

function style_extermination_camps (feature) {
  return {
      pane: 'pane_jsonLayer_extermination_camps',
      opacity: 1,
      color: 'rgba(255,255,255,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1,
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(100,100,100,1.0)',
      interactive: true,
  }
}

function style_concentration_camps (feature) {
  switch(String(feature.properties['labelConvoyDeparturePlace_color'])) {
      case 'purple':
        return {
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 1,
          fill: true,
          fillOpacity: 1,
          fillColor: 'purple',
          interactive: true,
          pane: 'pane_jsonLayer_concentration_camps'
      }
      break;
      case 'blue':
        return {
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 1,
          fill: true,
          fillOpacity: 1,
          fillColor: 'blue',
          interactive: true,
          pane: 'pane_jsonLayer_concentration_camps'
      }
    }
  }

function style_intermediateStop (feature) {
  switch(String(feature.properties['cambio_label_color'])) {
    case 'purple icon':
    return {
      pane: 'pane_jsonLayer_intermediateStop',
      rotationAngle: 0.0,
      rotationOrigin: 'center center',
      icon: L.icon({
        iconUrl: './marker/transport_train_station2.svg',
        iconSize: [(Math.log10(feature.properties.quantity)+1)*8, (Math.log10(feature.properties.quantity)+1)*8]
      }),
      interactive: true,
    }
  break;
  case 'purple circle':
        return {
        pane: 'pane_jsonLayer_intermediateStop',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
          iconUrl: './marker/purple_dot.svg',
          iconSize: [(Math.log10(feature.properties.quantity)+1)*8, (Math.log10(feature.properties.quantity)+1)*8]
        }),
        interactive: true,
    }
    break;
    case 'blue circle':
        return {
          pane: 'pane_jsonLayer_intermediateStop',
          rotationAngle: 0.0,
          rotationOrigin: 'center center',
          icon: L.icon({
            iconUrl: './marker/blue_dot.svg',
            iconSize: [(Math.log10(feature.properties.quantity)+1)*8, (Math.log10(feature.properties.quantity)+1)*8]
          }),
          interactive: true,
        }
      }
    }


function style_birth (feature) {
  switch(String(feature.properties['sex'])) {
    case 'M':
      return {
        pane: 'pane_jsonLayer_birth',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
          iconUrl: './marker/male.svg',
          iconSize: [20,20]
        }),
        interactive: true,
      }
      break;
      case 'F':
        return {
          pane: 'pane_jsonLayer_birth',
          rotationAngle: 0.0,
          rotationOrigin: 'center center',
          icon: L.icon({
            iconUrl: './marker/female.svg',
            iconSize: [20, 20]
          }),
          interactive: true,
        }
      }
    }

function style_prison_camps  (feature) {
  switch(String(feature.properties['detentionPlace_color'])) {
      case 'purple':
        return {
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 1,
          fill: true,
          fillOpacity: 1,
          fillColor: 'purple',
          interactive: true,
          pane: 'pane_jsonLayer_concentration_camps'
      }
      break;
      case 'blue':
        return {
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 1,
          fill: true,
          fillOpacity: 1,
          fillColor: 'blue',
          interactive: true,
          pane: 'pane_jsonLayer_concentration_camps'
      }
    }
  }

function style_arrest  (feature) {
    switch(String(feature.properties['arrestedBy'])) {
        case 'italiani':
          return {
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'red',
            interactive: true,
            pane: 'pane_jsonLayer_arrest'
        }
        break;
        case 'tedeschi':
          return {
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'black',
            interactive: true,
            pane: 'pane_jsonLayer_arrest'
        }
        break;
        case 'tedeschi e italiani':
          return {
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(150,75,00,1.0)',
            interactive: true,
            pane: 'pane_jsonLayer_arrest'
        }
        break;
        case 'sconosciuto' || 'white':
          return {
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'white',
            interactive: true,
            pane: 'pane_jsonLayer_arrest'
        }
      }
    }



function style_line_2 (feature) {
  if (searched_names.includes(feature.properties.name)){
      return {
          pane: 'pane_jsonLayer_lines',
          opacity: 1,
          color: 'red',
          dashArray: '',
          lineCap: 'round',
          lineJoin: 'round',
          weight: 5,
          fill: false,
          interactive: true,
      }
  } else  {
    return {
        pane: 'pane_jsonLayer_lines_second',
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 0.1,
        fill: false,
        interactive: true,
    }
  }
}

function style_line_1 (feature) {
  if (searched_names.includes(feature.properties.name)){
      return {
          pane: 'pane_jsonLayer_lines_second',
          opacity: 1,
          color: 'orange',
          dashArray: '',
          lineCap: 'round',
          lineJoin: 'round',
          weight: 2,
          fill: false,
          interactive: false,
      }
    } else  {
      return {
        pane: 'pane_jsonLayer_lines',
        opacity: 1,
        color: 'rgba(150,150,150,0)',
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 0.1,
        fill: false,
        interactive: false,
      }
    }
  }

function style_line_0 (feature) {
    return {
        pane: 'pane_jsonLayer_lines',
        opacity: 1,
        color: 'rgba(152,125,183,0.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 10.0,
        fillOpacity: 0,
        interactive: true,
    }
}
