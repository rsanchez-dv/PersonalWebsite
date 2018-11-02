<template>
  <div>
    <landing-page/>
    <Content/>
    <Footer/>
  </div>
</template>
<script>
import LandingPage from './LandingPage'
import Content from './Content.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
  name: 'HomePage',
  components: {
    LandingPage,
    Content,
    Footer
  }
}
</script>

<style scoped>

</style>
