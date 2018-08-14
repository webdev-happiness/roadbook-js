<template>
  <v-layout row wrap  class="home">
    <v-flex md12 class="filter">
      Type:
      <v-btn dark @click.prevent="roadType = 0">
        all
      </v-btn>
      <v-btn dark @click.prevent="roadType = 1">
        forest
      </v-btn>
      <v-btn dark @click.prevent="roadType = 2">
        route
      </v-btn>
      <v-btn dark @click.prevent="roadType = 3">
        city
      </v-btn>
    </v-flex>
    <v-flex md7>
      <v-layout row wrap>
        <!-- <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <v-flex md4 v-for="r in filteredRoads" class="road-card" style="padding:0px 15px;">
          <v-card>
            <v-card-media
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              height="100px"
            ></v-card-media>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{r.roadInfo.title}}</h3>
                <div>{{r.roadInfo.description}}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat @click.prevent="activeRoad(r)">Voir</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex md5>
      <LeafletMap :roads="filteredRoads"></LeafletMap>
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LeafletMap from '@/components/LeafletMap'


import store from '@/store/store'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  store: store,
  data(){
    return {
      roadType: 0
    }
  },
  components: {
    HelloWorld,
    LeafletMap
  },
  methods:{
    activeRoad(r){
      console.log(r)
    }
  },
  computed:{
    filteredRoads(){
      return store.getters['roads/filterByType'](this.roadType)
    }
  }
}
</script>

<style media="screen">
  .road-card{
    padding: 0px 5px;
  }

  .road-card .v-card{
    margin-bottom: 15px;
  }

  .filter{
    margin-bottom: 25px;
  }
</style>
