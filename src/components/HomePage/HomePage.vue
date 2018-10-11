<template>
  <div>
  <div class = "topSpace">
    <p></p>
  </div>
  <div class="container">
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum laoreet dignissim. Vivamus lacinia ligula non mauris facilisis tempor. Mauris metus diam, accumsan efficitur augue nec, facilisis volutpat nisl. Donec vestibulum nibh sit amet ipsum vestibulum, sit amet consectetur massa tempor. Aliquam consequat vel sem quis sagittis. Duis dictum, tortor vel rhoncus iaculis, urna odio dictum augue, in suscipit lacus tortor sit amet leo. Duis sodales interdum est, eget congue nunc ultrices et. Quisque non hendrerit arcu. Etiam congue augue ac hendrerit molestie. Aliquam vel odio suscipit, lacinia purus a, pulvinar dui. Integer eleifend elementum pulvinar. Morbi finibus, odio in congue rhoncus, mauris orci placerat sem, eu vehicula lorem magna id quam. Etiam rutrum libero turpis, feugiat consectetur dui pharetra et. Aliquam dictum, mi id malesuada luctus, quam ex cursus quam, vel molestie enim quam dignissim urna. Integer posuere, ipsum vitae accumsan pulvinar, neque quam consequat ligula, vel mollis risus eros aliquam ante.!</p>
   <p>Vestibulum sollicitudin hendrerit eros, sed egestas eros laoreet non. Quisque aliquet diam nulla, eu tristique ipsum congue congue. Donec dictum elementum leo. Nam mattis velit ut justo pharetra scelerisque. In sit amet velit ipsum. Pellentesque sed sem tincidunt lectus lobortis facilisis. Sed tempor, diam a sodales rutrum, nunc lectus varius elit, a vestibulum augue augue non metus. Nam eleifend eu elit ac semper. Vestibulum mollis, ligula quis consectetur lobortis, erat enim facilisis magna, eu tempor tortor neque non mauris. Vestibulum posuere fermentum metus, eget congue purus viverra id. Donec id elementum lacus.</p>
   <p></p>
   <p></p>
   <p></p>
  </div>
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
.topSpace{
  padding: 2em;
}
</style>
