<template>
  <!-- For Server-Side Rendering -->
  <div id="pageNotFound">
  	<!-- Import Navbar -->
  	<Navbar></Navbar>
  	<div class="container-404">
  		<h1>404</h1>
  		<h2>- Page Not Found -</h2>
  		<h4>Sorry but the page you are looking for doesn't exist.</h4>
  	</div>
  	<!-- Import Footer -->
  	<Footer></Footer>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'

export default {
  name: 'PageNotFound',
  components: {
  	Navbar,
  	Footer
  }
}
</script>

<style>
/* 404 Page Background Style */
#pageNotFound {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #42b883, #009e91, #00818f, #20647d, #35495e);
  background-size: all;
}

/* 404 Container Style */
.container-404 {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

/* 404 Heading Style */
.container-404 h1 {
  font-size: 17em;
  font-family: 'Raleway', sans-serif;
  color: rgba(0, 0, 0, 0.5);
}
.container-404 h2 {
  text-transform: uppercase;
  font-family: 'Permanent Marker', cursive;
  font-size: 3em;
  color: rgba(0, 0, 0, 0.8);
}	
.container-404 h4 {
  font-family: 'Sarabun', sans-serif;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.4pn );
}

/* Media Query */
@media only screen and (max-width: 1100px) {
  .container-404 h2 { font-size: 3em; }
}
@media only screen and (max-width: 950px) {
  .container-404 h2 { font-size: 2.5em; }
}
@media only screen and (max-width: 650px) {
  .container-404 h1 { font-size: 12em; }
  .container-404 h2 { font-size: 2em; }
}
@media only screen and (max-width: 400px) {
  .container-404 h1 { font-size: 8em; }
  .container-404 h2 { font-size: 1em; }
}
</style>