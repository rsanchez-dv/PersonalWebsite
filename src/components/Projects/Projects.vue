<template>
  <div>
    <Selector />
    <p v-if="!selected"><Blank/></p>
    <p v-if="selected === 'Whatfits'"> <Whatfits/></p>
    <p v-if="selected === 'CookBase'"> <CookBase/></p>
    <p v-if="selected === 'CookieCoders'"><CookieCoders/></p>
    <p v-if="selected === 'Personal'"><Personal/></p>

  </div>
</template>

<script>
import Selector from './Selector.vue'
import Whatfits from './ProjectsList/Whatfits.vue'
import CookBase from './ProjectsList/CookBase.vue'
import Nothing from '../Errors/Nothing.vue'
import Personal from './ProjectsList/Personal.vue'
import CookieCoders from './ProjectsList/CookieCoders.vue'
import Blank from './ProjectsList/Blank.vue'
import {serverBus} from '../../main.js'

export default {
  name: 'Projects',
  components: {
    Selector,
    Nothing,
    Whatfits,
    CookBase,
    Personal,
    CookieCoders,
    Blank
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
</style>
