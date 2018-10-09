<template>
<!-- Image and text -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Roberto Sanchez</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Projects / Experiences</a>
      <a class="nav-item nav-link" href="#">Resume</a>
      <a class="nav-item nav-link disabled" href="#">Contact Me</a>
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
#TitleName{
  color: #EB5535;
}
#NavBarBackgroundColor{
  background-color: #17222A;
}
</style>
