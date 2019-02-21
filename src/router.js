import Vue from 'vue'
import Router from 'vue-router'
/* Components */
import Home from './components/Home'
import Application from './components/Application'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { path: '*', 
      component: Home 
    }, 
    {
      path: '/app',
      name: 'app',
      component: Application
    },
  ]
})
