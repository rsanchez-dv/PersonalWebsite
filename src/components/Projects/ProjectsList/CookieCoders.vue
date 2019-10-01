<template>
  <div class="container">
    <h1>CookieCoders: An informative page</h1>
    <img src="../../../assets/images/ProjectImages/CookieCoders/cookiecoders.png" alt="Image of website on a fake mac book air">
    <br>
    <br>
    <div class="center">
      <b-row>
        <b-col class="labelStyle">Timeline:</b-col>
        <b-col class="labelData">April 2017 - May 2017</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">Project Type:</b-col>
        <b-col class="labelData">Intro to Web Development (Group)</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">My Role:</b-col>
        <b-col class="labelData">Team Lead, Full-Stack developer</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">Tools:</b-col>
        <b-col class="labelData">HTML, CSS ,Javascript, PHP, and MySql</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">Skills:</b-col>
        <b-col class="labelData">Project Management, Documentation, Web Design,and Front-end / Back-end Development</b-col>
      </b-row>
      <br>
      <b-row class="center">
        <a href="https://github.com/Zyxel-1/CookieCoders">For more about CookieCoders</a><i class="fa fa-link"
          aria-hidden="true"></i>
      </b-row>
    </div>
    <div>
      <h2>Context</h2>
      <p>CookieCoders is a website designed and built for CECS 470 - Web development class towards the end of the
        semester. Our goal was to create an informative website for our client who wanted to create a summer coding
        camp for the youth. This project is a collaborative effort between George Cheng, Howard Cho, Jennifer Nguyen,
        Mukesh
        Sehdev, and Roberto Sanchez. </p>
    </div>
    <div>
      <h2>Design</h2>
      <span class="subTitle">A simple walkthrough</span>
      <p>We had around 3 weeks to design and build a website with the restriction of not being able to use any
        frameworks to
        incorporate HTML, CSS, Javascript, PHP, and MySQL to make a functional website. We decided to arrange the
        website into muliple pages each depicting certain information that would be useful for the visitor.</p>
      <img src="../../../assets/images/ProjectImages/CookieCoders/sitemap.png" alt="Site Map image">
      <figure class="center">
        <figcaption>Fig. 1 - Sitemap of the website.</figcaption>
      </figure>
      <p>The following diagram illustrates the validation process for the two forms on the website. Each form validates
        that data on both the client side using Javascript and then handled in PHP before being stored in the database.</p>
      <img src="../../../assets/images/ProjectImages/CookieCoders/flowchart.png" alt="Flow chart of validations.">
      <figure class="center">
        <figcaption>Fig. 2 - A workflow of validation.</figcaption>
      </figure>
      <h3>Mockups</h3>
      <p>These are mockups to illustrate the solution to our instructor and client. Using FluidUI's tools to create
        these mockups it gave a framework for each team members to design and build thier parts for the project.</p>
      <img src="../../../assets/images/ProjectImages/CookieCoders/homepage.png" alt="Mockup of the homepage.">
      <figure class="center">
        <figcaption>Fig. 3 - Draft of the homepage used for submission to instructor and client.</figcaption>
      </figure>
      <img src="../../../assets/images/ProjectImages/CookieCoders/description.png" alt="Mockup of the description page.">
      <figure class="center">
        <figcaption>Fig. 4 - Draft of the description page.</figcaption>
      </figure>
      <img src="../../../assets/images/ProjectImages/CookieCoders/Register.png" alt="Mockup of the registration page.">
      <figure class="center">
        <figcaption>Fig. 5 - Draft of the registration page.</figcaption>
      </figure>
      <img src="../../../assets/images/ProjectImages/CookieCoders/qanda.png" alt="Mockup of the Q and A page.">
      <figure class="center">
        <figcaption>Fig. 6 - Draft of the the questions and answers page.</figcaption>
      </figure>
      <img src="../../../assets/images/ProjectImages/CookieCoders/about.png" alt="Mockup of the about page.">
      <figure class="center">
        <figcaption>Fig. 7 - Draft of the about section.</figcaption>
      </figure>

    </div>
    <div>
      <h2>Final MVP</h2>
      <span class="subTitle">Eventually</span>
      <img src="../../../assets/images/ProjectImages/CookieCoders/cookiecodersHome.png" alt="Final Homepage">
      <figure class="center">
        <figcaption>Fig. 8 - Final homepage, Designed and built by Mukesh Sehdev.</figcaption>
      </figure>
      <p>The project was hosted on the school's webserver used in the class. During our presentation we had to
        walkthrough each page and discuss the purpose of each page.</p>
      <img src="../../../assets/images/ProjectImages/CookieCoders/DesciptionFinal.png" alt="Description Final page">
      <figure class="center">
        <figcaption>Fig. 8 - Final homepage, Designed and built by Howard Cho.</figcaption>
      </figure>
      <p>The description page hosted several sample games made in javascript and videos on what content people will be
        doing in these camps.</p>
      <img src="../../../assets/images/ProjectImages/CookieCoders/registerFinal.png" alt="Description Final page">
      <figure class="center">
        <figcaption>Fig. 8 - Final homepage, Designed and built by Roberto Sanchez.</figcaption>
      </figure>
      <p>How to register for the event.</p>
      <img src="../../../assets/images/ProjectImages/CookieCoders/qandafinal.png" alt="Description Final page">
      <figure class="center">
        <figcaption>Fig. 8 - Final homepage, Designed and built by Jennifer Nguyen.</figcaption>
      </figure>
      <p>Ask addition questions incase the established q and a didn't answer.</p>
      <img src="../../../assets/images/ProjectImages/CookieCoders/aboutFinal.png" alt="Description Final page">
      <figure class="center">
        <figcaption>Fig. 8 - Final homepage, Designed and built by George Cheng.</figcaption>
      </figure>
      <p>The two clients.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieCoders',
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
figure {
  padding-bottom: 10px;
}
h1 {
  text-align: center;
  padding-top: 1em;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
    max-width: 100%;
  height: auto;
}
.labelStyle {
  font-weight: bold;
}
.labelData {
  font-weight: 100;
  color:grey;
}
.center{
  margin: auto;
  width: 50%;
}
a {
  text-align: center;
  color: black;
}
i{
  color: grey;
}
p {
  padding-left: 5em;
  padding-right: 2em;
}
.subTitle {
  color: grey;
  font-style: italic;
}
</style>
