import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify' // path to vuetify export
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false

Vue.use(Vuetify);
new Vue({
  Vuetify,
  render: h => h(App),
}).$mount('#app')
