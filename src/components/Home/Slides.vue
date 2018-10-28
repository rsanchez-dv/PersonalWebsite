<template>
  <div>
    <link rel="stylesheet" type="text/css" media="screen" href="../../assets/CSS/main.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="./node_modules/sal.js/dist/sal.css" />
    <section>
      <div data-sal-duration="1200" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">
        <br>
        <br>
        <h1>Hello World!</h1>
        <br>
        <h3>Blah, Blah, Blah, Scroll down for more</h3>
      </div>
    </section>
    <section>
     <div class="left" data-sal-duration="1200" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">
            <h3>Second slide</h3>
            <br>
            <p>Commodo duis amet dolor ipsum labore laborum voluptate. Mollit sunt amet ipsum dolore pariatur eu.
                Excepteur enim exercitation Lorem eiusmod consectetur voluptate eiusmod aute. Non excepteur irure ut
                consectetur mollit laborum exercitation. Officia nostrud tempor irure voluptate in ea mollit eu
                cupidatat non aliqua qui. Sint sint sit voluptate esse nisi labore.</p>
        </div>
        <div class="right" data-sal-duration="1200" data-sal="slide-down" data-sal-delay="300" data-sal-easing="ease-out-bounce">
            <img src="../../assets/images/profile.gif">
        </div>
    </section>
    <section>
     <div class="left" data-sal-duration="1200" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">
            <h3>Second slide</h3>
            <br>
            <p>Commodo duis amet dolor ipsum labore laborum voluptate. Mollit sunt amet ipsum dolore pariatur eu.
                Excepteur enim exercitation Lorem eiusmod consectetur voluptate eiusmod aute. Non excepteur irure ut
                consectetur mollit laborum exercitation. Officia nostrud tempor irure voluptate in ea mollit eu
                cupidatat non aliqua qui. Sint sint sit voluptate esse nisi labore.</p>
        </div>
        <div class="right" data-sal-duration="1200" data-sal="slide-down" data-sal-delay="300" data-sal-easing="ease-out-bounce">
            <img src="../../assets/images/profile.gif">
        </div>
    </section>
  </div>
</template>
<script>
import sal from 'sal.js'
export default {
  name: 'Slides',
  mounted () {
    console.log('This was executed')
    sal()
  }
}
</script>

<style>
body,
html {
  height: 100vh;
  margin: 0;
}

section {
  height: calc(100vh);
  padding: 4em;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

section h1 {
  font-size: 3em;
  text-transform: uppercase;
  line-height: .9em;
}

section:nth-of-type(1) {
  background: #2b3033;
  color: #4e5356;
}

section:nth-of-type(2),
section:nth-of-type(3) {
  background: #dde3e6;
  height: calc(100vh);
  color: #4e5356;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 50% 50%;
  grid-template-columns: 50% 50%;
}

section:nth-of-type(2) h3,
section:nth-of-type(3) h3 {
  font-size: 3em;
  text-transform: uppercase;
  margin: 0;
}

section:nth-of-type(2) p,
section:nth-of-type(3) p {
  font-size: 1.3em;
}

section:nth-of-type(2) img,
section:nth-of-type(3) img {
  margin: 0 auto;
  display: block;
  width: 250px;
}

section:nth-of-type(4) {
  background: #fff;
  grid-template-columns: repeat(3, 33.3%);
}

section:nth-of-type(4) p {
  width: 50%;
}
/*# sourceMappingURL=main.css.map */
</style>
