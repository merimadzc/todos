<template>
  <div id="application">
    <!-- Background -->
    <div class="background-one"></div>
    <div class="background-two">
      <!-- Import Navbar -->
      <Navbar></Navbar>
      <!-- Application Heading -->
      <h2 class="text-center todos">todos</h2>
    </div>
  	<div class="container">
      <!-- Todo Form -->
	  	<form v-on:submit.prevent="addItem()">
        <div class="add">
	  		  <input type="text" placeholder="What needs to be done?" v-model="input" name="input" v-validate="'min:5'" />
          <!-- Add Item Button -->
          <button type="text" class="addButton" v-on:click="addItem()">
            <font-awesome-icon icon="plus" class="icon" />
          </button>
        </div>
        <!-- Vee-Validate Animation -->
        <transition name="alert-in">
          <p class="alert" v-if="errors.has('input')">{{ errors.first('input') }}</p>
        </transition>
	  	</form>
      <!-- List -->
	  	<ul class="list">
	  	  <li v-for="(item, index) in items" v-bind:key="index" v-on:dblclick="removeItems">
          {{ item }}
        </li>
	  	</ul>
  	</div>
    <!-- Import Footer -->
    <Footer></Footer> 
  </div>
</template>

<script>
import Navbar from './Navbar'  
import Footer from './Footer'

import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Application',
  components: {
    Navbar,
    Footer
  },
  data() {
  	return {
      input: '',
  	}
  },
  computed: {
    ...mapState([
      'items', 'item', 'error',
    ]),
  },
  methods: {
    ...mapMutations([
      'ADD_ITEM'
    ]),
    ...mapActions([
      'removeItem'
    ]),
    /* Add new items function with validation */
    addItem() {
  		this.$validator.validateAll().then((result) => {
  			if(result) {
          this.ADD_ITEM(this.input);
          this.input = '';  		 				
  			} else {
  				this.error = true;
  				console.log('The input field must be at least 5 characters.');
  			}
  		})
  	},
    /* Remove item from items function */
    removeItems(item) {
      this.removeItem(item)
    }
  }
}
</script>

<style>
/* Application Component Style */
#application {
  width: 100%;
  height: 100vh;
}

/* Application Background Style */
.background-one {
  width: 100%;
  height: 100vh;
  position: absolute;
  background: linear-gradient(to top, #42b883, #009e91, #00818f, #20647d, #35495e);
  background-size: all;
}
.background-two {
  width: 100%;
  height: 100vh;
  position: absolute;
  background-image: linear-gradient(-30deg, rgba(255,255,255,1) 45%, transparent 46%);
  background-size: all;
}

/* Heading Style */
.todos {
  position: absolute;
  top: 18%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 6em;
  font-family: 'Raleway', sans-serif;
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
}

/* App Container Style */
#application .container {
  width: 45%;
  height: auto;
  max-height: 50vh;
  padding: 2% 2%;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border: 1px solid transparent;
  border-radius: 7px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  color: rgba(0,0,0,0.6);
  background-color: rgba(235, 235, 235, 0.8);
  overflow: auto;
}

/* Input Style */
.add {
  width: 100%;
  margin: 0 auto;
}
input {
  padding: 0px 20px;
  border-radius: 17px;
  width: 80%;
  height: 40px;
  border: 0px solid transparent;
  background: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.5);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.3);
  display: inline;

}
input:focus {
  outline: transparent;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(0, 0, 0, 0.3);
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgba(0, 0, 0, 0.3);
}
::-ms-input-placeholder { /* Microsoft Edge */
  color: rgba(0, 0, 0, 0.3);
}

/* Add Items Button Style */
.addButton {
  display: inline;
  width: 15%;
  height: 40px;
  margin-left: 10px;
	border-radius: 50px;
  border: 0px solid transparent;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.3);

}
.addButton:hover, span:hover {
  webkit-filter: blur(1px); /* Chrome, Safari, Opera */
  filter: blur(1px);
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.addButton:focus {
  outline: transparent;
}

/* List Style */
.list {
  width: 100%;
  margin: 0 auto;
  padding: 2% 0 0 0;
}
li {
  list-style-type: none;
  font-size: 1.5em;
  color: rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Sarabun', sans-serif; 
}
li:hover {
  text-decoration: line-through;
  text-decoration-color: red;
  cursor: pointer;
}
.icon {
  color: rgba(0, 0, 0, 0.6);
}

/* Error Style */
#application .alert {
  font-weight: bold;
  display: inline-block;
  color: red;
  padding-top: 10px;
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
}

/* Alert Animation */
.alert-in-enter-active {
  animation: bounce-in .5s;
}
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1); }
  100% { transform: scale(0.5); }
}

/* Media Query for App */
@media only screen and (max-width: 1300px) {
  #application .container { width: 55%; }
  .todos { font-size: 6em; }
}
@media only screen and (max-width: 1000px) {
  #application .container { width: 65%; }
  .todos { font-size: 5em; }  
}
@media only screen and (max-width: 600px) {
  #application .container { width: 80%; }
  .todos { font-size: 4em; }  
}
@media only screen and (max-width: 400px) {
  #application .container { width: 90%; }
  .todos { font-size: 3em; }
}
</style>