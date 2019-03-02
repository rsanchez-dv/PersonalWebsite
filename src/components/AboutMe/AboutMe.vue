<template>
  <div id="bg-color">
      <div class="container text-center sectionPadding" id="AboutMe">
        <span class="sectionTitle">About Me</span>
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <p class="lead mb-5">I'm a recent graduate from California State University, Long Beach seeking an entry
              level position in
              either software engineering or web development. I've been programming since 2012 in C++ and Java then
              picking up web development during my later university life. I generally consider myself enthusiastic
              about technology. Since I was a kid I liked to tinker and see what is capable on computers. My
              interests are in the realm of web development, robotics, and automation.
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  padding-top:5%;
}
@media screen and (max-width: 330px){
    #bg-color{
      background-color: #2b3033;
      color:white;
  }
}
@media screen and (min-width: 331px){
#bg-color{
    background-color: #2b3033;
    color:white;
}
}
</style>
