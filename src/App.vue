<template>
  <div id="app">
    <NavBar></NavBar>
    <p>asdfasdf</p>
  </div>
</template>
<script>
import Header from '@/components/HomePage/Header.vue'
export default {
  name: 'App',
  components: {
    'NavBar': Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
