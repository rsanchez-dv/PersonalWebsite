<template>
  <b-navbar toggleable="md" type="dark" id="nav-color">
    <b-navbar-brand left to="/" aria-label="Homepage">
      <img
        id="logo"
        src="https://personalwebsiteimages.s3-us-west-1.amazonaws.com/images/logo.png"
        alt="Website Logo"
      />
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav right>
          <b-nav-item href="/#AboutMe">About Me</b-nav-item>
          <b-nav-item href="/#Education">Education & Experience</b-nav-item>
          <b-nav-item href="/#Skills">Skills</b-nav-item>
          <b-nav-item href="/#Projects">Projects</b-nav-item>
          <b-nav-item href="/#Contact">Contact</b-nav-item>
          <b-nav-item
            href="https://rsanchez-dv.github.io/Roberto-Sanchez-Portfolio/"
            >Resume</b-nav-item
          >
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
  position: fixed;
  z-index: 100;
  background-color: #2b3033;
  width: 100%;
  height: 3em;
}
#logo {
  height: 2em;
}
</style>
