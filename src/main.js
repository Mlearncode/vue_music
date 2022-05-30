import Vue from 'vue'
import App from './App.vue'
import router from './router'
import getVant from './plugins'

Vue.config.productionTip = false

getVant(App)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
