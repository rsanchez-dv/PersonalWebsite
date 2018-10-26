<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar/NavBar.vue'
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
</style>
