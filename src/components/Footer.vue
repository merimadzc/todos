<template>
  <div id="footer" class="fixed-bottom">
  	<h4 class="text-center">Made with <font-awesome-icon icon="heart" id="heart" /> by 
      <a href="https://merimadzc.github.io/todos/" target="_blank">
        Merima
      </a>
    </h4>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
#footer, #footer a {
  color: rgba(0,0,0,0.6);
  font-family: 'Parisienne', cursive;
}
#footer a:hover {
  text-decoration-color: red;
}
#heart {
  color: red;
}
</style>