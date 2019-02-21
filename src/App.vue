<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* Google Fonts */
@import url('https://fonts.googleapis.com/css?family=Raleway:900|Permanent+Marker|Sarabun|Allerta+Stencil|Parisienne');

/* Selection Style */
::-moz-selection { /* Code for Firefox */
    background: #eee;
}
::selection {
    background: #eee;
}

/* Custom Scrollbar */
/* Width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background-color: #eee;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 100px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 100px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
} 	
</style>