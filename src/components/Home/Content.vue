<template>
  <div>
    <section class="content-section bg-light" id="about">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h2>About Me</h2>
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
    </section>
    <section class="content-section darkBackground text-white text-center" id="services">
      <div class="container">
        <div class="content-section-heading">
          <h2 class="mb-5">Skills</h2>
        </div>
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
    <section class="content-section" id="portfolio">
      <div class="container">
        <div class="content-section-heading text-center">
          <h2 class="mb-6">Education</h2>
        </div>
        <b-container>
          <b-row>
            <div class="col-sm-4">
                <img id="csulbLogo" alt="CSULB Logo" src="../../assets/images/HomePageImages/csulbLogo.png">
            </div>
            <div class="col-sm-8">

                <h3>California State University, Long Beach</h3>

              <b-row class="location">Long Beach, California</b-row>
              <b-row>
                <p class="date">Jan 2016 - May 2018</p>
              </b-row>
              <b-row>
                <p>Transfered from El Camino College Janurary 2016 and graduated May 2018 with a bachelor's degree in
                  Computer
                  Science. </p>
                <p>
                  Relevant courses taken:
                  <br>
                  <ul>
                    <li>CECS 323 - Database Fundamentals</li>
                    <li>CECS 328 - Data Structures and Algorithms</li>
                    <li>CECS 343 - Introduction to Software Engineering</li>
                    <li>CECS 378 - Introduction to Computer Security Principles</li>
                    <li>CECS 470 - Web Programming and Accessibility</li>
                    <li>CECS 491A/B - Software Engineering Project I/II</li>
                  </ul>
                  <br>
                  <a href="http://catalog.csulb.edu/content.php?catoid=2&navoid=67">For more information on theses classes check out the school's catalog here</a>
                </p>
              </b-row>
            </div>
          </b-row>
          <br>
        </b-container>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'Content',
  components: {

  }
}
</script>

<style scoped>
a {
  color:#3c3394;
}
.content-section {
  padding-top: 7.5em;
  padding-bottom: 7.5em;
}
.bg-light {
  background-color: #f8f9fa;

}
.div{
  font-family: 'Source Sans Pro';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  text-align: left;
  background-color: white;
}
.btn {
  width: 180px;
  height: 67px;
}
.btn-dark{
background-color:#292c2f;
}
.btn-light{
  background-color: #f8f9fa;
}
.darkBackground {
  background-color: #292c2f;
}
.fas, .far , .fab{
  padding-bottom: .25em;
}
#csulbLogo{
  height: 18em;
}
</style>
