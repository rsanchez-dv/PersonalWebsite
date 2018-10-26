<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
    <router-link class="navbar-brand" to="/">Roberto Sanchez</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <router-link class="nav-item nav-link" to="/">Home</router-link>
        <router-link class="nav-item nav-link" to="Projects">Projects & Experiences</router-link>
        <router-link class="nav-item nav-link" to="Resume">Resume</router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
.navbar-custom{
  background-color: #2b3033;
  color: red;
}
</style>
