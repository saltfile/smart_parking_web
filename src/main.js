import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//引入路由器
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vRegion from 'v-region'
import store from './store'

Vue.use(vRegion)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  store,
  router: router,
  beforeCreate() {
		Vue.prototype.$bus = this
	},
}).$mount('#app')
