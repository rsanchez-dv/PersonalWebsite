<template>
  <div>
    <Selector />
    <p v-if="!selected"><Whatfits/></p>
    <p v-if="selected === 'Whatfits'"> <Whatfits/></p>
    <p v-if="selected === 'CookBase'"> <CookBase/></p>
    <p v-if="selected === 'CookieCoders'"><CookieCoders/></p>
    <p v-if="selected === 'Personal'"><Personal/></p>
    <back-to-top bottom="50px" right="50px"  visibleoffset="100">
  <button type="button" class="btn btn-info btn-to-top" id="backToTopButton"><i class="fa fa-chevron-up"></i></button>
</back-to-top>
  </div>
</template>

<script>
import Selector from './Selector.vue'
import Whatfits from './ProjectsList/Whatfits.vue'
import CookBase from './ProjectsList/CookBase.vue'
import Personal from './ProjectsList/Personal.vue'
import CookieCoders from './ProjectsList/CookieCoders.vue'
import BackToTop from 'vue-backtotop'
import {serverBus} from '../../main.js'

export default {
  name: 'Projects',
  components: {
    Selector,
    Whatfits,
    CookBase,
    Personal,
    CookieCoders,
    BackToTop
  },
  data: function () {
    return {
      selected: null
    }
  },
  created () {
    // Using the service bus
    serverBus.$on('projectSelected', (selected) => {
      this.selected = selected
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#backToTopButton {
  background-color: #2F3336;
  border-color: white;
}
</style>
