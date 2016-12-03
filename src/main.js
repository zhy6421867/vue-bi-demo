import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import store from './store/index'
import App from './App.vue'
import './assets/css/index.scss'


Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	routes: [
		// { path: '/index', component: Index, },
		// { path: '/bonuslist', component: bonuslist },
		// { path: '/relax/:cityCode', component: relax, },
		// { path: '/skin/:cityCode', component: skin },
		// { path: '/forpackage/:packageId', component: forpackage },
		// { path: '/shop/:shopId/item/:itemId', component: serviceDetail },
		// { path: '/place_order', component: place_order },
		// { path: '/beauticianlist', component: beauticianlist },
		// { path: '/linkman_list', component: linkman_list },
		// { path: '/new_linkman', component: new_linkman },
		// { path: '/finish', component: finish },
		// { path: '*', redirect: '/index' }
	]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})