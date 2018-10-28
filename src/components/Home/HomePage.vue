<template>
  <div>
    <Content/>
    <Footer/>
  </div>
</template>
<script>
import Footer from '@/components/Footer/Footer.vue'
import Content from './Content.vue'
export default {
  name: 'HomePage',
  components: {
    Footer,
    Content
  }
}
</script>

<style scoped>

</style>
