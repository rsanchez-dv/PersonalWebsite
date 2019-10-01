<template>
  <div id="bg-color">
    <br>
    <div>
    <h1> Empty <i class="far fa-window-close"></i></h1>
    <p class="center">Did you load a project from the carousel?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GreyMessaging'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  padding-top: 2em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
h1 {
  text-align: center;
}
p{
    text-align:center;
}
#bg-color{
    background-color: #2b3033;
    height: 100vh;
    color:white;
}
</style>
