<template>
  <div id="app" >
    <NavBar></NavBar>
    <router-view></router-view>
    <back-to-top bottom="50px" right="50px"  visibleoffset="200"><button type="button" aria-label="Back to Top" class="btn btn-info btn-to-top" id="backToTopButton"><i class="fa fa-chevron-up"></i></button></back-to-top>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar/NavBar.vue'
import BackToTop from 'vue-backtotop'

export default {
  name: 'App',
  components: {
    NavBar,
    BackToTop
  }
}
</script>

<style>
#backToTopButton {
  background-color: #2F3336;
  border-color: white;
}
</style>
