export default class LeafletMap {
  constructor () {
    this._map = null
    this._bounds = []
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
    })
  }

  getCoordinate (arr) {
    return new L.LatLng(arr[0], arr[1])
  }

  addRoad (way, text) {
    this._bounds.push(way)

    return new LeafletRoad(way, text, this._map)
  }

  addMarker (text, lat, long) {
    let point = [lat, long]
    this._bounds.push(point)
    return new LeafletMarker(text, lat, long, this._map)
  }

  center() {
    this._map.fitBounds(this._bounds)
  }

  centerOn(obj){
    this._map.fitBounds(obj._road._bounds, {maxZoom: 9});
  }
}

class LeafletMarker {
  constructor (text, lat, long, map) {
    this._text = text
    this._popup = L.popup({
      className: 'marker',
      closeOnClick: false,
      closeOnEscapeKey: false,
      autoClose: false,
      closeButton: false
    }).setLatLng([lat, long]).setContent(text).openOn(map)
  }

  addEventListener (e, cb) {
    this._popup.addEventListener('add', () => {
      this._popup.getElement().addEventListener(e, cb)

    })
  }

  setActive () {
    this._popup.getElement().classList.add('active')
  }

  unActive () {
    this._popup.getElement().classList.remove('active')
  }

  setContent (text) {
    this._popup.getElement().classList.add('is-expensive')
    this._popup.setContent(text)
    this._popup.update()
  }

  resetContent () {
    this._popup.getElement().classList.remove('is-expensive')
    this._popup.setContent(this._text)
    this._popup.update()
  }

}

class LeafletRoad {
  constructor (coordinates, text, map) {
    this._marker = new LeafletMarker(text, coordinates[0][0], coordinates[0][1], map)
    this._road = L.polyline(coordinates, {color: 'grey'}).addTo(map)
  }

  addEventListener (event, cb) {
    this._marker.addEventListener(event, cb)
    this._road.addEventListener('add', () => {
      this._road.getElement().addEventListener(event, cb)
    })
  }

  setActive () {
    this._marker.setActive()
    this._road.getElement().classList.add('is-active')
  }

  unActive () {
    this._marker.unActive()
    this._road.getElement().classList.remove('is-active')
  }

}
