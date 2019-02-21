<template>
  <div id="home">
    <Navbar></Navbar>
  	<div class="container-fluid">
  	  <div class="col-12 home-section">
  	  	<h1>
          A Simple Todo App with Vue.js, vue-router, vee-validate
          <br/> 
          and Vuex 2.0
        </h1>
        <div class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="320" />
          </svg>
          <div class="text">
            <router-link to="/app">Try!</router-link>
          </div>
        </div>
  	  </div>
  	</div>
    <Footer></Footer>  
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
/* Special Font */
@import url('https://fonts.googleapis.com/css?family=Raleway:1000');

/* Home Component Style */
#home {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #42b883, #009e91, #00818f, #20647d, #35495e);
  background-size: all;
  text-align: center;
}

/* Sections Style */
/* First Section */
#home .home-section {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

/* Home Heading Style */
#home h1 {
  font-family: 'Raleway', sans-serif;
  color: white;
  font-size: 5em;
}

/* Try App Button Style */
#home .text a {
  color: white;
}
#home .text a:hover {
  text-decoration: none;
}
.svg-wrapper {
  height: 0px;
  margin: 0;
}
.shape {
  fill: transparent;
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  stroke: white;
}
.text {
  color: #fff;
  font-size: 3em;
  font-family: 'Allerta Stencil', sans-serif;
  font-weight: bold;
  letter-spacing: 8px;
  line-height: 32px;
  position: relative;
  top: -45px;
  text-transform: uppercase;
}
.text:hover {
  font-size: 2.5em;
}
@keyframes draw {
  0% {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 10px;
  }
  100% {
    stroke-dasharray: 760;
    stroke-dashoffset: 0;
    stroke-width: 2px;
  }
}
.svg-wrapper:hover .shape {
  -webkit-animation: 0.5s draw linear forwards;
  animation: 0.5s draw linear forwards;
}

/* Media Query */
@media only screen and (max-width: 1000px) {
  #home h1 { font-size: 4em; }
}
@media only screen and (max-width: 800px) {
  #home h1 { font-size: 3em; }
}
@media only screen and (max-width: 600px) {
  #home h1 { font-size: 2em; }
  #home .home-section { left: 50%; }
}
@media only screen and (max-width: 400px) {
  #home h1 { font-size: 1.5em; }
  #home .home-section { left: 50%; }
}
</style>