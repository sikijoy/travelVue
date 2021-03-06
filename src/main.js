// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/reset.css'
import fastClick from 'fastclick'
import './assets/css/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body);
// Vue.use(VueAwesomeSwiper, /* {default global option} */)
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
