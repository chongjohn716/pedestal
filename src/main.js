import 'minireset.css'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

// window.Vue = Vue
// window.VueRouter = VueRouter

Vue.use(ElementUI, {
  size: 'small'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#dep-root')
