<template>
  <div>
    <link rel="stylesheet" type="text/css" media="screen" href="../../assets/CSS/main.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="./node_modules/sal.js/dist/sal.css" />
    <section>
      <div data-sal-duration="1200" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">
        <h1>Welcome to the first slide!</h1>
        <br>
        <h3>Scroll down for more</h3>
      </div>
    </section>
    <section>
      <div class="left" data-sal-duration="1200" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">
        <h3>Second slide</h3>
        <p>Commodo duis amet dolor ipsum labore laborum voluptate. Mollit sunt amet ipsum dolore pariatur eu.
          Excepteur enim exercitation Lorem eiusmod consectetur voluptate eiusmod aute. Non excepteur irure ut
          consectetur mollit laborum exercitation. Officia nostrud tempor irure voluptate in ea mollit eu
          cupidatat non aliqua qui. Sint sint sit voluptate esse nisi labore.</p>
      </div>
      <div class="right" data-sal-duration="1200" data-sal="slide-down" data-sal-delay="300" data-sal-easing="ease-out-bounce">
      </div>
    </section>
    <section>
      <div clas="one" data-sal-duration="1200" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">
        <h3>Third Slide pt.1<br> Nice!</h3>
        <p>Mollit exercitation mollit in aute dolore sit nostrud officia adipisicing. Anim aute incididunt
          aliquip do ea aliqua cupidatat. Cillum excepteur incididunt tempor sunt ad proident nisi qui
          consequat elit excepteur dolor. Labore irure nulla irure officia. Nisi esse ad mollit quis mollit
          culpa quis anim cillum magna pariatur. Cupidatat non laborum nulla id nulla irure pariatur laboris.
          Sit et fugiat consequat ullamco laborum exercitation et.</p>

      </div>
      <div clas="one" data-sal-duration="1200" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">
        <h3>Third Slide pt.2</h3>
        <p>Mollit exercitation mollit in aute dolore sit nostrud officia adipisicing. Anim aute incididunt
          aliquip do ea aliqua cupidatat. Cillum excepteur incididunt tempor sunt ad proident nisi qui
          consequat elit excepteur dolor. Labore irure nulla irure officia. Nisi esse ad mollit quis mollit
          culpa quis anim cillum magna pariatur. Cupidatat non laborum nulla id nulla irure pariatur laboris.
          Sit et fugiat consequat ullamco laborum exercitation et.</p>

      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Slides'
}
</script>

<style>
body, html {
  height: 100vh;
  margin: 0;
}

section {
  height: calc(100vh - 8em);
  padding: 4em;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

section h1 {
  font-size: 6em;
  text-transform: uppercase;
  line-height: .9em;
}

section:nth-of-type(1) {
  background: #2b3033;
  color: #4e5356;
}

section:nth-of-type(2), section:nth-of-type(3) {
  background: #dde3e6;
  height: calc(100vh - 8em);
  color: #4e5356;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 50% 50%;
      grid-template-columns: 50% 50%;
}

section:nth-of-type(2) h3, section:nth-of-type(3) h3 {
  font-size: 3em;
  text-transform: uppercase;
  margin: 0;
}

section:nth-of-type(2) p, section:nth-of-type(3) p {
  font-size: 1.3em;
}

section:nth-of-type(2) img, section:nth-of-type(3) img {
  margin: 0 auto;
  display: block;
  width: 250px;
}

section:nth-of-type(3) {
  background: #fff;
  -ms-grid-columns: (33.3%)[3];
      grid-template-columns: repeat(3, 33.3%);
}

section:nth-of-type(3) p {
  width: 50%;
}

button {
  padding: 1em;
  background: #008bde;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1em;
  cursor: pointer;
  border-radius: 5px;
}
/*# sourceMappingURL=main.css.map */
</style>
