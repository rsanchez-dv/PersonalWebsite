<template>
  <div id="bg-color" >
    <img id="center" src="../../assets/images/ErrorImages/nothing.jpg" alt="nothingImage">
    <br>
    <h1 id="title"> Under Construction</h1>
  </div>
</template>

<script>
export default {
  name: 'Nothing'
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
#bg-color{
    background-color: #2b3033;
    height: 100vh;
    color:white;
}
</style>
