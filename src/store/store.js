import Vue from 'vue'
import Vuex from 'vuex'
import roads from '@/store/modules/roads'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    roads: roads
  }
})
