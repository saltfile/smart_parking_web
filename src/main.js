import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//引入路由器
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vRegion from 'v-region'
import store from './store'

//高德地图
import VueAMap from 'vue-amap'; 
import {VueJsonp} from 'vue-jsonp'

Vue.use(VueJsonp)

Vue.use(vRegion) 
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
	// 高德的key
	key: 'ec0243c91ebbb219a67cc07c5bd82268',
	// 插件集合
	plugin: [
		'AMap.CircleEditor',// 圆形编辑器插件
		"AMap.Geolocation", // 定位控件，用来获取和展示用户主机所在的经纬度位置
		"AMap.Geocoder", // 地理编码与逆地理编码服务，用于地址描述与坐标间的相互转换
		"AMap.Autocomplete",
		"AMap.PlaceSearch",
		"AMap.CitySearch",
	],
	// 高德 sdk 版本，默认为 1.4.4
	v: '1.4.4'
});
//高德的安全密钥
window._AMapSecurityConfig = {
	securityJsCode:'c83b02195d81cd226b6ed010abd40159',
}

new Vue({
  render: h => h(App),
  store,
  router: router,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')

