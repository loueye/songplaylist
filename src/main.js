import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import './registerServiceWorker'
import VueLocalForage from 'vue-localforage'


Vue.config.productionTip = false
Vue.use(VueLocalForage)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
