<template>
    <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <b-carousel-slide caption="Selection of Projects" text="Click left or righ to see my projects and click the button to load below"
        img-src="../../assets/backgrounds/altHome3.gif">
      </b-carousel-slide>
      <b-carousel-slide caption="Whatfits" text="A fitness social media application" img-src="../../assets/backgrounds/altHome3.gif">
        <b-button class="btn btn-primary" @click="projectSelected('Whatfits')">Show</b-button>
      </b-carousel-slide>
      <b-carousel-slide caption="CookBase" text="A recipe managemnet web application" img-src="../../assets/backgrounds/altHome3.gif">
        <b-button class="btn btn-primary" @click="projectSelected('CookBase')">Show</b-button>
      </b-carousel-slide>
      <b-carousel-slide caption="CookieCoders" text="A fitness social media application" img-src="../../assets/backgrounds/altHome3.gif">
        <b-button class="btn btn-primary" @click="projectSelected('CookieCoders')">Show</b-button>
      </b-carousel-slide>
      <b-carousel-slide caption="Personal Website" text="The making of this site" img-src="../../assets/backgrounds/altHome3.gif">
        <b-button class="btn btn-primary" @click="projectSelected('Personal')">Show</b-button>
      </b-carousel-slide>
    </b-carousel>
</div>
</template>

<script>
import { serverBus } from '../../main.js'
export default {
  props: ['selectedOption'],
  name: 'Selector',
  methods: {
    projectSelected: function (option) {
      serverBus.$emit('projectSelected', option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
