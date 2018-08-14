<template lang="html">
  <aside id="map"></aside>
</template>

<script>
import L from 'leaflet';
import LeafletMap from '@/assets/js/leafletMap.class.js'
import polyline from '@mapbox/polyline'

export default {
  data(){
    return {
        map: null
    }
  },
  props: {
    roads: Array
  },
  mounted(){
    console.log('carte mounté')
    let $map = document.getElementById('map');
    this.initMap($map);
  },
  methods: {
    initMap(element){
      this.map = new LeafletMap();
      this.map.load(element);

      if(this.roads != null){
        this.roads.forEach(r => {
          let road = this.map.addRoad(polyline.decode(r.routes[0].geometry), r.roadInfo.title);

          // TODO
          road.addEventListener('click', () => {
            road.setActive();
            this.$emit("active", r)
          })

        })
      }
      
      this.map.center()
    }
  },
  watch:{
    roads(data){ // A chaque fois que la liste est filtrée

      this.map.clearMap()

      data.forEach(r => {
        let road = this.map.addRoad(polyline.decode(r.routes[0].geometry), r.roadInfo.title);

        // TODO
        road.addEventListener('click', () => {
          road.setActive();
          this.$emit("active", r)
        })

      })

      this.map.center();
    }
  }
}
</script>

<style lang="css">
  #map{
    height: 100vh;
    background-color: #f0F0F0;
  }

  .leaflet-interactive.is-active{
    z-index: 401!important;
  	stroke: #da4566;
  	stroke-width: 5px;
  }
</style>
