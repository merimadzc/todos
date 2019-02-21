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
      path: '/todos',
      name: 'home',
      component: Home
    },
    { path: '*', 
      component: Home 
    }, 
    {
      path: '/todos/app',
      name: 'app',
      component: Application
    },
  ]
})
