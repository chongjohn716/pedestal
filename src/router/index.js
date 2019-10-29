import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404')
  },
  {
    path: '/:appPath',
    name: 'app',
    component: () => import(/* webpackChunkName: "app-container" */ '../views/AppContainer')
  },
  {
    path: '/:appPath/*',
    name: 'app-also',
    component: () => import(/* webpackChunkName: "app-container" */ '../views/AppContainer')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
