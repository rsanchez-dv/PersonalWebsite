<template>
  <!-- Jumbotron   -->
  <div class="jumbotron jumbotron-fluid" >
    <video autoplay muted loop poster="https://dummyimage.com/900x400/000/fff">
      <source src="../../assets/backgrounds/mood.webm" data-src="" type="video/webm">
    </video>
    <div class="contain" id="landingPage">
      <h1 class="title">Hello World!</h1>
      <h4>Let's begin</h4>
       <div class="arrow bounce"><i class="fa fa-angle-down fa-5x" aria-hidden="true"></i></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LandingPage',
  components: {}
}
</script>

<style scoped>
#titlePage {
  padding-top: 26vh;
}

#landingPage {
  padding-top: 26vh;
  text-align: center;
  color: white;
  vertical-align: middle;
  margin: 5% 0;
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
  padding-top: 35vh;
  position: relative;
  bottom: 0;
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
