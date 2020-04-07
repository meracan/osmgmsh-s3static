mapboxgl.accessToken = 'TOKEN';
const url=window.location.origin

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-68.13734351262877, 45.137451890638886],
zoom: 2
});
 
map.on('load', function() {
map.addSource('osmMesh', {'type': 'vector','tiles': [url+"/mbtiles/mesh/{z}/{x}/{y}"]});
map.addLayer({'id': 'edges','type': 'line','source': 'osmMesh','source-layer': 'edges','layout': {'line-cap': 'round','line-join': 'round'},'paint': {'line-opacity': 0.6,'line-color': 'rgb(53, 175, 109)','line-width': 1}},);
map.addLayer({'id': 'boundaries','type': 'line','source': 'osmMesh','source-layer': 'boundaries','layout': {'line-cap': 'round','line-join': 'round'},'paint': {'line-opacity': 0.6,'line-color': 'rgb(0, 0, 0)','line-width': 2}},);

});