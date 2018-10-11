<template>
  <div id="app">
    <NavBar></NavBar>
      <div class = "topSpace">
    <p></p>
  </div>
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from '@/components/HomePage/NavBar.vue'
export default {
  name: 'App',
  components: {
    'NavBar': NavBar
  }
}
</script>

<style>
#app {

}
.topSpace{
  padding: 2em;
}
</style>
