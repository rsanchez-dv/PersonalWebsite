<template>
  <div class="lightBackground screenHeight" id="Skills">
    <div class="container text-center" >
      <span class="sectionTitle">Skills</span>
      <p class="sectionSubTitle">These are the following skills I have aquired through hard work at school and on my personal life. </p>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0 skillItem">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas fa-7x fa-users"></i></span>
            <h4>
              <strong>Natural Leader</strong>
            </h4>
            <p class="text-faded mb-0">Experience working and managing a team of developers in a scrum enviroment and ensuring deadlines are reached while inspiring and motivating team members to give it their all</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0 skillItem">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fab fa-7x fa-chrome"></i>
            </span>
            <h4>
              <strong>Web Oriented</strong>
            </h4>
            <p class="text-faded mb-0">Experience developing web applications on modern platforms as a full stack
              developer using HTML 5, CSS 3, C#, Javascript, SQL, Node.js, MongoDB, and Express.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-md-0 skillItem">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas fa-7x fa-terminal"></i>
            </span>
            <h4>
              <strong>Linux</strong>
            </h4>
            <p class="text-faded mb-0">Experience utilizing and developing on linux platforms such as debian or Arch
              based distributions </p>
          </div>
          <div class="col-lg-4 col-md-6 skillItem">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas fa-7x fa-code"></i>
            </span>
            <h4>
              <strong>Multi-Tool</strong>
            </h4>
            <p class="text-faded mb-0">Experience with C++, C#, Bash, Java, Python, SQL, and Javascript for other work and projects.</p>
          </div>
           <div class="col-lg-4 col-md-6 skillItem">
            <span class="service-icon rounded-circle mx-auto mb-3">
             <i class="fas fa-7x fa-tasks"></i>
            </span>
            <h4>
              <strong>Project Management</strong>
            </h4>
            <p class="text-faded mb-0">Experience documenting projects and communicating with team members and management on project progress and planning.</p>
          </div>
           <div class="col-lg-4 col-md-6 skillItem">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas fa-7x fa-fire"></i>
            </span>
            <h4>
              <strong>Learning by Doing</strong>
            </h4>
            <p class="text-faded mb-0">Experience being a motivated learner working on projects or playing around with existing code bases.</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screenHeight{
  height: 100%;
}
@media screen  and (min-width: 2560px)  {
  .screenHeight{
    height:100vh;
  }
}
.skillItem{
  padding-top:20px;
  color:#2b3033
}
.row{
  padding-top: 1em;
}
.fas, .far , .fab{
  padding-bottom: .25em;
}

</style>
