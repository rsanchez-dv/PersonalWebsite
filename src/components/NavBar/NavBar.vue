<template>
  <b-navbar toggleable="md" type="dark" id = "nav-color">
    <b-navbar-brand left to="/">Roberto Sanchez</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav right>
          <b-nav-item  to="Projects">Projects</b-nav-item>
          <b-nav-item  to="Resume">Resume</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style>
#nav-color {
  background-color: #2b3033;
}
</style>
