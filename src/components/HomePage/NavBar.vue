<template>
<nav class="navbar navbar-dark bg-dark" id="NavBarBackgroundColor">
  <a class="navbar-brand" id="TitleName" href="#">Roberto Sanchez</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
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
