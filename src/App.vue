<template>
  <div id="app">
    <ZLayout></ZLayout>
  </div>
</template>

<script>
import ZLayout from './components/layout/ZLayout.vue';

export default {
  name: 'App',
  components: {
    ZLayout,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
