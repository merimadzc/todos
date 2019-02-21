import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      'Learn Vue.js',
      'BE HAPPY!'
    ],
    item: '',
    error: false,
  },
  mutations: {
  	ADD_ITEM: (state, item) => {
  		state.items.push(item)
  	},
  	REMOVE_ITEM: (state, item) => {
  		state.items.splice(item, 1)
  	},
  },
  actions: {
  	removeItem: (context, item) => {
  		context.commit('REMOVE_ITEM', item)
  	}
  }
})