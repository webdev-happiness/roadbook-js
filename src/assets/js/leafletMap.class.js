export default class LeafletMap {
  constructor () {
    this._map = null
    this._bounds = []
    this._layerRoads = null
  }

  async load (element) {
    return new Promise((resolve, reject) => {
          // --> SET MAP
          this._map = L.map(element, {scrollWheelZoom:false})
          L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            scrollwheelzoom: false
          }).addTo(this._map)
          resolve()
          // END

          this._layerRoads = L.layerGroup().addTo(this._map);

    })
  }

  getCoordinate (arr) {
    return new L.LatLng(arr[0], arr[1])
  }

  addRoad (way, text) {
    this._bounds.push(way)
    return new LeafletRoad(way, text, this._layerRoads)
  }

  center() {
    this._map.fitBounds(this._bounds)
  }

  centerOn(obj){
    this._map.fitBounds(obj._road._bounds, {maxZoom: 9});
  }

  clearMap(){
    this._bounds = [];
    this._layerRoads.clearLayers();
  }
}

class LeafletRoad {
  constructor (coordinates, text, map) {
    this._marker = L.marker(coordinates[0]).bindTooltip(text).openTooltip().addTo(map);
    this._road = L.polyline(coordinates, {color: 'grey'}).addTo(map)

    this._marker.on('click', ()=>{
      this.setActive();
    })
  }

  addEventListener (event, cb) {
    this._marker.addEventListener(event, cb)
    this._road.addEventListener('add', () => {
      this._road.getElement().addEventListener(event, cb)
    })
  }

  setActive () {
    this._marker.openTooltip()
    this._road.getElement().classList.add('is-active')
  }

  unActive () {
    this._marker.unActive()
    this._road.getElement().classList.remove('is-active')
  }

}
