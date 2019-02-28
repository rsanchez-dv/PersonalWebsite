<template>
  <div id="bg-color">
      <section class="content-section darkBackground text-center" id="services">
      <div class="container">
        <div class="content-section-heading">
          <span class="sectionTitle">Skills</span>        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas fa-7x fa-users"></i></span>
            <h4>
              <strong>Natural Leader</strong>
            </h4>
            <p class="text-faded mb-0">Experience working and managing a team of developers in a scrum enviroment</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fab fa-7x fa-chrome"></i>
            </span>
            <h4>
              <strong>Web Oriented</strong>
            </h4>
            <p class="text-faded mb-0">Experience developing web applications on modern platforms as a full stack
              developer using HTML 5, CSS 3, C#, Javascript, and SQL</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-md-0">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas fa-7x fa-terminal"></i>
            </span>
            <h4>
              <strong>Linux</strong>
            </h4>
            <p class="text-faded mb-0">Experience utilizing and developing on linux platforms such as debian or Arch
              based distributions </p>
          </div>
          <div class="col-lg-4 col-md-6">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="fas fa-7x fa-code"></i>
            </span>
            <h4>
              <strong>Multi-Tool</strong>
            </h4>
            <p class="text-faded mb-0">Experience with C++, C#, Bash, Java, Python, SQL, and Javascript for other work.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Blank'
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
    color:#2b3033;
}
.fas, .far , .fab{
  padding-bottom: .25em;
}

</style>
