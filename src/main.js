import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* Vue Validate */
import VeeValidate from 'vee-validate'
/* Bootstrap Vue */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/* Vue FontAwesome Icons */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTimes, faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue)
Vue.use(VeeValidate)

/* Icons */
library.add(faPlus, faTimes, faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
