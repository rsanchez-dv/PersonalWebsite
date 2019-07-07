<template>
  <div class="darkBackground screenHeight" id="Education">
    <div class="container text-center">
      <span class="sectionTitle">Education / Work Experience</span>
      <p
        class="sectionSubTitle"
      >A brief timeline on my educational journey. Afterward I started self study using plenty of online educational resources.</p>
      <Timeline />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Timeline from "./Timeline";
export default {
  name: "Education",
  components: { Timeline }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screenHeight {
  height: 100%;
}
@media screen and (max-width: 768px) {
  .timeline {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
  }
}
@media screen and (min-width: 425px) {
  .timeline {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    display: inline-block;
    padding: 50px;
  }
}
@media screen and (min-width: 2560px) {
  .screenHeight {
    height: 100vh;
  }
}
</style>
