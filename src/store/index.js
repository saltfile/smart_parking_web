import Vue from 'vue'
import Vuex from 'vuex'


import user from './modules/user'
import order from './modules/orders'
import map from './modules/map'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    user,
    order,
    map
  }
})
