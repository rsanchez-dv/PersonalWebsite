<template>
  <!-- Jumbotron   -->
  <div class="jumbotron jumbotron-fluid" >
    <video autoplay muted loop poster="https://dummyimage.com/900x400/000/fff">
      <source src="../../assets/backgrounds/mood.webm" data-src="" type="video/webm">
    </video>
    <div class="contain" id="landingPage">
      <h1>Hello World!</h1>
      <h2>Welcome to my website</h2>
      <a href="#container" class="button scroll">
        <span class="scroll-down-arrow"></span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
#titlePage {
  padding-top: 26vh;
}

.jumbotron {
  position: relative;
  overflow: hidden;
  background-color: black;
  height: 100vh;
}

.jumbotron video {
  position: absolute;
  object-fit: cover;
  z-index: 1;
  top: 0;
  width: auto;
  height: 100%;
  opacity: 0.5;
}

.jumbotron .container {
  z-index: 2;
  position: relative;
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

h2 {
  font-weight: 300;
  font-size: 0.9em;
  letter-spacing: 0.2em;
  opacity: 0.8;
  margin-bottom: 30px;
}

.button.scroll {
  padding: 8px;
  background: #111;
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  position: relative;
}

.scroll-down-arrow {
  margin: .01em 0 0;
  position: absolute;
  left: 5px;
  top: 7px;
  -webkit-animation: bounce 1000ms ease infinite;
  -moz-animation: bounce 1000ms ease infinite;
  -o-animation: bounce 1000ms ease infinite;
  animation: bounce 1000ms ease infinite;
  -webkit-animation-timing-function: cubic-bezier(.14, .75, .2, 1.01);
  -moz-animation-timing-function: cubic-bezier(.14, .75, .2, 1.01);
  -ms-animation-timing-function: cubic-bezier(.14, .75, .2, 1.01);
  animation-timing-function: cubic-bezier(.14, .75, .2, 1.01);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid #f2f2f2;
  content: "";
}

.button.scroll:before {
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 3px white, inset 0px 0px 3px white;
  padding: 2px;
  z-index: -1;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: block;
  content: "";
  -webkit-animation: ring 1s alternate 0s infinite;
  -moz-animation: ring 1s alternate 0s infinite;
  -o-animation: ring 1s linear 0s infinite;
  animation: ring 1s linear 0s infinite;
}

@-webkit-keyframes bounce {

  0%,
  100% {
    top: 9px;
    opacity: 0.5
  }

  25% {
    top: 12px;
    opacity: 1
  }

  50% {
    opacity: 0.8
  }
}

@keyframes bounce {

  0%,
  100% {
    top: 9px;
    opacity: 0.5
  }

  25% {
    top: 12px;
    opacity: 1
  }

  50% {
    opacity: 0.8
  }
}

@-webkit-keyframes ring {

  0%,
  100% {
    -webkit-transform: scale(1, 1);
    opacity: 1
  }

  75% {
    -webkit-transform: scale(1.2, 1.2);
    opacity: 0.4
  }
}

@keyframes ring {

  0%,
  100% {
    transform: scale(1, 1);
    opacity: 1
  }

  75% {
    transform: scale(1.2, 1.2);
    opacity: 0.4
  }
}

</style>
