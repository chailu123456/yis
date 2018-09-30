// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import api from './api'
import 'vant/lib/vant-css/index.css'
Vue.config.productionTip = false

// or with options (options 为可选参数，无则不传)
// or with options (options 为可选参数，无则不传)
import { Lazyload } from 'vant';
 Vue.use(Lazyload, {
  preLoad: 1.3,
  error: 'static/img/error.jpg',
  loading: 'static/img/loading.gif',
  attempt: 3
})

Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
