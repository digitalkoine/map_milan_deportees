var map = L.map('map',  {
  //ensures the timeDimension is active
  timeDimension: true,
  //Defines the timeDimension Option
  timeDimensionOptions: {
    //determines the starting and finishing times of the slider, and the period of each step.
    timeInterval: "1943-09-08/1945-09-02",
    //P1D means Period 1 Day, P1Y means Period 1 Years and so on.It is the step increment when the fast forward and fast backward buttons are clicked.
    period: "P1D",
  },
  //Automatically adds a TimeDimension Control to the map if set to true.
  timeDimensionControl: true,
  //Defines the TimeDimension control options and elements
  timeDimensionControlOptions: {
    //position on the map of the TimeDImension control
    position: 'bottomleft',
    // adds a loop Button
    loopButton: 'true',
    //Show or hide the date in the TimeDimension Control
    displayDate: false,
    //if the slider starts automatically when opening the map
    autoPlay: true,
    //minimum speed of the time progression. It is controlled by a slider in the control
    minSpeed: 2,
    //maximum speed of the time progression. It is controlled by a slider in the control
    maxSpeed: 50,
    //introduce the whiskers that limits the time period
    limitSliders: true,
    // if true, when drag the slider it instantly updated the map
    timeSliderDragUpdate: true,
    // This are option for the TimeDimension Player.
    playerOptions: {
      //Milliseconds that the player will wait to check and launch the next time in the TimeDimension
      transitionTime: 400,
      //the map automacally restart when finished if the option is true
      loop: false,
      // the startover button is present if the option is true
      startOver:true,
    }
  }
}).setView([41.6, 8.857524], 5);
//This calls the tiles that will be used as basemap for the map. Different types and style of basemap are available
L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',{
    //Controls the max zoom of the app

    minZoom: 0,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  }
).addTo(map);

//this are options for the mouse coordinate box
var coordinatesControl = new L.control.coordinates({
  position:"bottomleft",
  decimals:2,
  decimalSeperator:",",
  labelTemplateLat:  "Latitude: {y}",
  labelTemplateLng:  "Longitude: {x}"
})

coordinatesControl.addTo(map);

createSquare = function (latlng, options) {
        var point = map.latLngToContainerPoint(latlng),
            size = options.radius || options.size || 10,
            point1 = L.point(point.x - size, point.y - size),
            point2 = L.point(point.x + size, point.y + size),
            latlng1 = map.containerPointToLatLng(point1),
            latlng2 = map.containerPointToLatLng(point2);
        return new L.rectangle([latlng1, latlng2], options);
    }
