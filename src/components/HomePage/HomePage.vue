<template>
  <div class="container">
   <p>Home page container</p>
   <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/HomePage/Footer.vue'
export default {
  name: 'HomePage',
  components: {
    'Footer': Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
