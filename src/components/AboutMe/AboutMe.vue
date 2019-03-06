<template>
  <div class="darkBackground screenHeight">
      <div class="container text-center" id="AboutMe">
        <span class="sectionTitle">About Me</span>
        <br/>
        <span class="sectionSubTitle">This is subtitle</span>

        <div class="row">
          <div class="col-lg-10 mx-auto centerBody">
            <p class="lead mb-5 ">I'm a recent graduate from California State University, Long Beach seeking an entry
              level position in
              either software engineering or web development. I've been programming since 2012 in C++ and Java then
              picking up web development during my later university life. I generally consider myself enthusiastic
              about technology. Since I was a kid I liked to tinker and see what is capable on computers. My
              interests are in the realm of web development, robotics, and automation.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0 skillItem">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas fa-7x fa-drafting-compass"></i></span>
            <h4>
              <strong>Designing / Building</strong>
            </h4>
            <p class="text-faded mb-0">Experience working and managing a team of developers in a scrum enviroment and ensuring deadlines are reached while inspiring and motivating team members to give it their all</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0 skillItem">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas fa-7x fa-cogs"></i>

</span>
            <h4>
              <strong>Nack for Technology</strong>
            </h4>
            <p class="text-faded mb-0">Experience working and managing a team of developers in a scrum enviroment and ensuring deadlines are reached while inspiring and motivating team members to give it their all</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0 skillItem">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas  fa-7x fa-campground"></i>
              </span>
            <h4>
              <strong>Outdoors Explorer</strong>
            </h4>
            <p class="text-faded mb-0">Experience working and managing a team of developers in a scrum enviroment and ensuring deadlines are reached while inspiring and motivating team members to give it their all</p>
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
