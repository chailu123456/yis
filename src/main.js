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
  error: 'http://img2.imgtn.bdimg.com/it/u=1502174773,3523313441&fm=26&gp=0.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538674523704&di=fb8dbaecc8b10fabf780819531d96efc&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c72159151e06b5b3086ed484ab68.gif',
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
