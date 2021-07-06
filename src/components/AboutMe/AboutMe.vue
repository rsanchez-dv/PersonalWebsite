<template>
  <div class="lightBackground screenHeight " id="AboutMe">
      <div class="container text-center">
        <span class="sectionTitle">About Me</span>
        <br/>
        <!-- <span class="sectionSubTitle">This is subtitle</span> -->
        <div class="row">
          <div class="col-lg-10 mx-auto centerBody">
            <p class="lead mb-5 ">I'm a graduate from California State University, Long Beach. I've been programming since 2012 in C++ and Java then
              picking up web development during my later university life. Currently persuing my interests in Data Science. Here are some small snippets on my interests:
            </p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0 skillItem">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas fa-7x fa-drafting-compass"></i></span>
            <h4>
              <strong>Designing / Building</strong>
            </h4>
            <p class="text-faded mb-0">
              Passionate about building and designing stuff ranging from electronics, software, and hardware.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0 skillItem">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas fa-7x fa-cogs"></i>
            </span>
            <h4>
              <strong>Nack for Technology</strong>
            </h4>
            <p class="text-faded mb-0">
            Been enthusiastic about technology since a kid ranging from computers and analog systems.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0 skillItem">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas  fa-7x fa-campground"></i>
              </span>
            <h4>
              <strong>Outdoors Explorer</strong>
            </h4>
            <p class="text-faded mb-0">
              Every now and then I like going outside and connecting with nature and myself.
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
.row{
  padding-top: 3em;
}
.centerBody{
  padding-top:2em;
}
.screenHeight{
  height:100%
}
.h4{
  color:red;
}
@media screen and (max-width: 425px){
  .row{
    padding-top: 1em;
  }
}
@media screen and (min-width:2560px){
  .screenHeight{
    height: 100vh;
  }
}
</style>
