// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import jQuery from 'jquery'
// global.jQuery = jQuery;
// import tether from 'tether';
// global.Tether = tether;
// require('bootstrap/dist/js/bootstrap.min');
import {TweenMax} from "gsap";
import 'bootstrap-vue/dist/bootstrap-vue.css';
global.TweenMax = TweenMax;
require('bootstrap/scss/bootstrap.scss');
import { BootstrapVue } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
