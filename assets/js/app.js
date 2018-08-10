import "@babel/polyfill"; // Not in devDependency because it need to be load before my script
import L from 'leaflet';
import polyline from '@mapbox/polyline'
import LeafletMap from '@/js/leafletMap.class'


let $map = document.getElementById('map')
var roads = Array.from(document.querySelectorAll(".js-road"));

function activeRoad(active, map, road, r){
  if(active != null){
    roads.forEach((e) =>{e.classList.remove('active')});
    active.unActive();
  }
  r.classList.add('active');
  road.setActive();
  map.centerOn(road);
  return road;
}

async function initMap(){
  let map = new LeafletMap();
  let active = null;
  await map.load($map);

  roads.forEach($r =>{
    let road = map.addRoad(polyline.decode($r.dataset.geometry),
    "<p><span class='data-distance'>"+Math.round($r.dataset.distance/1000)+" Km </span><br><span class='data-duration'>"+Math.round($r.dataset.duration/60)+" Minutes </span></p>");

    $r.addEventListener('click', ()=>{
      active = activeRoad(active, map, road, $r);
    })

    road.addEventListener('click', ()=>{
      active = activeRoad(active, map, road, $r);
    })

  })

  map.center();
}



if ($map) {
  initMap().then(() =>{
    console.log('ok');
  });
}
