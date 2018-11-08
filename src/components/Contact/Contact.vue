<template>
  <div id="bgColor">
    <section class=" container">
      <h1 class="center">Contact Me</h1>
      <hr>
      <b-container class="bv-example-row">
        <b-col>
          <b-row><a href="https://www.linkedin.com/in/robertosanchez92/"><i class="fab fa-linkedin"><span class="title">LinkedIn</span></i></a></b-row>
          <br>
          <b-row><a href="mailto:rsanchez92@live.com?Subject=Hello"><i class="fas fa-envelope-square"><span class="title">Email</span></i></a></b-row>
          <br>
          <b-row><a href="https://github.com/Zyxel-1"><i class="fab fa-github-square"><span class="title">Github</span></i></a></b-row>
        </b-col>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
#bgColor {
    background-color: #2b3033;
    height: 100vh;
    color: white;
}
.title {
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 1em;
}
h1 {
    color: white;
}
i {
    color: white;
    font-size: 3em;
}
hr {
    background-color: white;
}
a {
    text-decoration: none;
    color: white;
}
</style>
