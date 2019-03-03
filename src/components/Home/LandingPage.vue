<template>
  <!-- Jumbotron   -->
  <div class="jumbotron jumbotron-fluid" id="image-bg">
    <div class="contain" id="landingPage">
      <h1 data-sal="slide-up" data-sal-delay="300" data-sal-duration="1200" data-sal-easing="ease-out-bounce">Roberto Sanchez</h1>
      <h4 data-sal="slide-up" data-sal-delay="700" data-sal-duration="1200" data-sal-easing="ease-out-bounce">Software Engineer / Web Developer</h4>
      <div class="arrow bounce"><i class="fa fa-angle-down fa-5x" aria-hidden="true"></i></div>
    </div>
  </div>
</template>
<script>
import sal from 'sal.js'
export default {
  name: 'LandingPage',
  components: {
    sal
  },
  mounted () {
    sal()
  }
}
</script>

<style scoped>
@import "../../../node_modules/sal.js/dist/sal.css";

#image-bg{
  background-image: url("../../assets/backgrounds/sampleBackground.png");
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#landingPage {
  padding-top: 25vh;
  text-align: center;
  color: white;
  vertical-align: middle;
  margin: 5% 0;
  font-family: 'Roboto', sans-serif;
}

h1,
h2 {
  font-size: 2.05em;
  letter-spacing: 0.3em;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.4em;
}
.jumbotron {
  position: relative;
  overflow: hidden;
  background-color: black;
  height: 98vh;
  margin-bottom: 0px;
}

.jumbotron video {
  position: absolute;
  object-fit: cover;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

.jumbotron .container {
  z-index: 2;
  position: relative;
}

i {
  display: block;
  color: #fff;
}
.arrow {
  padding-top: 0;
  position: absolute;
  bottom: 2.5em;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 60px;
}

.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}
@-moz-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
</style>
