<template>
  <div>
    <!--Content Slide 1 - About Me -->
    <section class="slideCenter">
      <h1 data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-out-bounce">About Me</h1>

      <b-container id="aboutMe">
        <b-row data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-out-bounce">
          <br>
          <b-col sm="4">
            <!--
            <img src="../../assets/images/HomePageImages/profile.gif">
            -->
          </b-col>
          <b-col sm="7">
            <b-row>
              <p>I'm a recent graduate from California State University, Long Beach seeking an entry level position in
                either software engineering or web development. I've been programming since 2012 in C++ and Java then
                picking up web development during my later university life. I generally consider myself enthusiastic
                about technology. Since I was a kid I liked to tinker and see what is capable on computers. My
                interests are in the realm of web development, robotics, and automation.
              </p>
            </b-row>
            <b-row data-sal="slide-up" data-sal-duration="1200" data-sal-delay="300" data-sal-easing="ease-out-bounce">
              <p>Outside of developing and researching I usually enjoy being outside and enjoying nature, playing video
                games, and watching movies. </p>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!--Content Slide 2 - Education-->
    <section class="slideCenter">
      <h1 data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-out-bounce">Education</h1>
      <br>
      <b-container>
        <b-row data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-out-bounce">
          <b-col sm="4">
            <img src="../../assets/images/HomePageImages/csulbLogo.png" fluid-grow>
          </b-col>
          <b-col sm="7">
            <b-row>
              <h3>California State University, Long Beach</h3>
            </b-row>
            <b-row class="location">Long Beach, California</b-row>
            <b-row>
              <p class="date">Jan 2016 - May 2018</p>
            </b-row>
            <b-row>
              <p>Transfered from El Camino College Janurary 2016 and graduated May 2018 with a bachelors in Computer
                Science. </p>
              <p>
                Courses taken:
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
                For more information on theses classes check out the school's catalog <a href="http://catalog.csulb.edu/content.php?catoid=2&navoid=67">here.</a>
              </p>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!--Content Slide 3 - Education-->
    <section class="slideCenter">
      <h1 data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-out-bounce">Education
        Cont.</h1>
      <br>
      <b-container>
        <b-row data-sal="slide-up" data-sal-duration="1200" data-sal-delay="300" data-sal-easing="ease-out-bounce">
          <b-col sm="4">
            <img src="../../assets/images/HomePageImages/elco.png" fluid>
          </b-col>
          <b-col sm="7">
            <b-row>
              <h3>El Camino Community College</h3>
            </b-row>
            <b-row class="location">Torrance, California</b-row>
            <b-row>
              <p class="date">Jan 2011 - Dec 2015</p>
            </b-row>
            <b-row>
              <p>Started attending El Camino College as a Computer Science major from the beginning of 2011 and
                graduated at the end of 2015 with a degree in Computer Science and Mathematics.</p>
              <p>
                Courses taken:
                <br>
                Computer Science:
                <ul>
                  <li>CSCI 1 Problem Solving and Program Design using C++</li>
                  <li>CSCI 2 Introduction to Data Structures</li>
                  <li>CSCI 3 Computer Programming in Java</li>
                  <li>CSCI 12 Programming for Internet Applications Using PHP, JavaScript, and XHTML</li>
                  <li>CSCI 16 Assembly Language Programming for the IBM PC and Compatibles</li>
                  <li>CSCI 30 Advanced Programming in C++</li>
                  <li>CSCI 40 Introduction to UNIX Operating Systems</li>
                </ul>
                For more information on these classes check out the school's catalog <a href="http://www.elcamino.edu/academics/mathsciences/courses.aspx">here</a>
                <br>
              </p>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!--Content Slide 4 - Skills-->
    <section class="slideCenter">
      <b-container>
        <h1 data-sal="slide-up" data-sal-duration="1200" data-sal-delay="300" data-sal-easing="ease-out-bounce">Skills</h1>
        <hr>
        <b-row data-sal="slide-up" data-sal-duration="1200" data-sal-delay="300" data-sal-easing="ease-out-bounce">
          <b-col>
            <i id="skillIcon" class="fas fa-desktop"></i> Programming Skills
          </b-col>
          <b-col>
            <ul>
              <li>C#</li>
              <li>Java</li>
              <li>Python</li>
              <li>C++</li>
            </ul>
          </b-col>
          <b-col>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>SQL</li>
            </ul>
          </b-col>
        </b-row>
        <hr>
        <b-row data-sal="slide-up" data-sal-duration="1200" data-sal-delay="300" data-sal-easing="ease-out-bounce">
          <b-col>
            <i id="skillIcon" class="fas fa-users"></i>Soft / Inter-Personal Skills
          </b-col>
          <b-col>
            <ul>
              <li>Team Leader</li>
              <li>Positive Attitude</li>
              <li>Good Communication</li>
              <li>Time Management</li>
            </ul>
          </b-col>
          <b-col>
            <ul>
              <li>Team Player</li>
              <li>Ability to accept and learn from criticism</li>
              <li>Conflict Resolution </li>
              <li>Adaptability</li>
            </ul>
          </b-col>
        </b-row>
        <hr>
        <b-row data-sal="slide-up" data-sal-duration="1200" data-sal-delay="300" data-sal-easing="ease-out-bounce">
          <b-col>
            <i id="skillIcon" class="fas fa-drafting-compass"></i>Other Stuff / Frameworks
          </b-col>
          <b-col>
            <ul>
              <li>ASP.NET</li>
              <li>Node.js</li>
              <li>XUnit Testing</li>
              <li>Vue.js</li>
            </ul>
          </b-col>
          <b-col>
            <ul>
              <li>Git / Github</li>
              <li>Amazon Web Services</li>
              <li>Agile / Scrum</li>
              <li>Linux</li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!--Content Slide 5 - Experience-->
    <section class="slideCenter">
      <b-container>
        <h1 data-sal="slide-up" data-sal-duration="1200" data-sal-delay="300" data-sal-easing="ease-out-bounce">Experiences</h1>
        <b-row data-sal="slide-up" data-sal-duration="1200" data-sal-delay="300" data-sal-easing="ease-out-bounce">
          <b-col sm="4">
            <img src="../../assets/images/HomePageImages/mesalogo.jpg" fluid-grow>
          </b-col>
          <b-col sm="7">
            <b-row>
              <h3>Computer Science Tutor</h3>
            </b-row>
            <b-row class="location">El Camino Community College</b-row>
            <b-row class="location">Torrance, California</b-row>
            <b-row>
              <p class="date">Aug 2015 - May 2016</p>
            </b-row>
            <b-row>
              <p>I have tutored El Camino College computer science students for around a year. During those months I
                was responsible for helping struggling students, many of who are first learning to program for the
                first time, with understanding basic programming concepts and providing support for designing their
                solutions.</p>
              <p> One of the main reasons why I wanted to become a tutor was that many students entering this field did
                not have a basic programming background (some cases a computer background) and I wanted to make a
                difference in helping them learn and do well academically. I provided supplemental lectures covering
                concepts taught in class and answering their questions by showing examples of concepts. I also gave
                advice on structuring solutions to better help students who are beginning writing larger more complex
                assignments.</p>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!--Content Slide 6 - Projects-->
    <section class="slideCenter">
      <b-container>
        <h1 data-sal="slide-up" data-sal-duration="1200" data-sal-delay="300" data-sal-easing="ease-out-bounce">Projects</h1>
        <p data-sal="slide-up" data-sal-duration="1200" data-sal-delay="300" data-sal-easing="ease-out-bounce">These
          are a small sample of projects that I have been involved in. To see my complete list of work check out
          my <a href="https://github.com/Zyxel-1">Github</a> or a selection of projects on the projects tab.</p>
        <b-card-group deck data-sal="slide-up" data-sal-duration="1200" data-sal-delay="300" data-sal-easing="ease-out-bounce">
          <b-card title="Whatfits" img-src="../../assets/images/HomePageImages/whatfitsIcon.png" img-alt="Image"
            img-top tag="article" style="max-width: 20rem;" class="mb-2">
            <p class="card-text">
              A fitness social media web application. A collaborated effort between 5 other developers to create an
              online community for gym goers.
            </p>
          </b-card>
          <b-card title="Personal Website" img-src="../../assets/images/HomePageImages/personalIcon.png" img-alt="Image"
            img-top tag="article" style="max-width: 20rem;" class="mb-2">
            <p class="card-text">
              A personal portfolio website designed an built by me. Pretty much an overview of the design and
              development of this website.
            </p>
          </b-card>
          <b-card title="CookieCoders" img-src="../../assets/images/HomePageImages/cookiecodersIcon.png" img-alt="Image"
            img-top tag="article" style="max-width: 20rem;" class="mb-2">
            <p class="card-text">
              A webpage designed for a summer coding camp for youth. Created for the CSULB web development class along
              with 4 other developers.
            </p>
          </b-card>
        </b-card-group>
        <br>
      </b-container>
    </section>

  </div>
</template>
<script>
import sal from 'sal.js'
export default {
  name: 'Content',
  components: {
    sal
  },
  mounted () {
    sal()
  }
}

</script>

<style scoped>
@import "../../../node_modules/sal.js/dist/sal.css";
@import "../../assets/CSS/main.css";
.slideCenter {
  padding-top: 10%;
}
.location {
  font-style: italic;
  font-weight: bold;
}

.date {
  font-style: italic;
}
img {
  width: 10em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  padding-bottom: 2em;
}
#skillIcon {
  padding-right: 10px;
}
</style>
