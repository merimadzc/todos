<template>
  <div>
      <nav class="fixed-top">
        <router-link to="/todos">Home</router-link>
        <router-link to="/todos/app">App</router-link>      
      </nav>  	
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style>
/* Navbar Style */
nav {
  text-align: right;
  padding: 2% 10% 0 0;
  font-family: 'Sarabun', sans-serif;
}
nav a {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.3em;
  padding: 10px;
}
nav a:hover {
  color: rgba(255, 255, 255, 0.8);
  background: #4043CF;
  text-decoration: none;
}
</style>