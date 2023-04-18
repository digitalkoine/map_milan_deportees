//This section of the code creates the box in the bottom right hand side that display the current date, in a DD/MM/YYYY format
var currentTime = L.control({position: 'bottomleft'});

map.timeDimension.on('timeload', function(data) {
  var getcurrentTime = map.timeDimension.getCurrentTime();
  var dateCurrentTime = new Date(getcurrentTime);
  var options = { day: '2-digit', month: 'long', year: 'numeric' };
  var date_italian = dateCurrentTime.toLocaleDateString('it-IT', options);
  currentTime.onAdd = function (map){
    var div = L.DomUtil.create('div', 'yearbox');
    div.innerHTML += '<h1>' + date_italian + '</h1> '
    return div;
  };
currentTime.addTo(map);
});
