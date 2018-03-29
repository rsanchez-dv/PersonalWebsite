<template>
  <transition name="slide">
    <div v-cloak>
      <Brand />

      <br />
      <h1>{{pageTitle}}</h1>

      <h2>
        Description
      </h2>
      <p>
        {{pageDescription}}
      </p>
      <br />

      <span>
        <router-link to="/login">Login Link</router-link>
      </span>
      <span>
        <button @click="toLogin" >Login Button</button>
      </span>

      <User />
</div>
    <!-- Navbar -->
    <div class="w3-top">
      <div class="w3-bar w3-red w3-card w3-left-align w3-large">
        <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
        <a href="#" class="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
        <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 1</a>
        <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 2</a>
        <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 3</a>
        <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 4</a>
      </div>
      </div>
  </transition>
</template>
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif}
.w3-bar,h1,button {font-family: "Montserrat", sans-serif}
.fa-anchor,.fa-coffee {font-size:200px}
</style>
<script>
</script>
<script>
export default {
  name: 'Home',
  components: { // Example of using multiple child components

  },
  computed: {
    user: function () {
      return this.$store.getters.user
    }
  },
  data () {
    return {
      pageTitle: 'Home Page',
      // Shows that data binding can handle significant sizes,
      // but it's almost always better to Vue's "computed values" for such cases
      pageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  },
  methods: {
    toLogin: function () {
      this.$router.push('Login')
    }
  }
}

</script>
