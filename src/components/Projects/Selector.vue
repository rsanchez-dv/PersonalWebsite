<template>
<div class="center">
  <b-nav fill tabs>
  <b-nav-item @click="projectSelected('Whatfits')">Whatfits</b-nav-item>
  <b-nav-item @click="projectSelected('CookieCoders')">CookieCoders</b-nav-item>
  <b-nav-item @click="projectSelected('Personal')">Personal Website</b-nav-item>
  <b-nav-item @click="projectSelected('CookBase')">CookBase</b-nav-item>
</b-nav>
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
