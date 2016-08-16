<template>
  <div id="app">
    <head-top>
      <search></search>
    </head-top>
  </div>
</template>

<script>
import HeadTop from './components/HeadTop.vue';
import Search from './components/search.vue';

export default {
  components: {
    HeadTop,
    Search,
  },
};
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;  
}

body {
  margin: 0;
  font-size: 1em;
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

</style>
