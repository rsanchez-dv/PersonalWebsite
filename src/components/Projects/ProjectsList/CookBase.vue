<template>
  <div class="container">
    <h1>CookBase: An online recipe management system</h1>
    <img src="../../../assets/images/ProjectImages/CookBase/homepage.png" alt="Mockup homepage">
    <figure class="center">
      <figcaption>Fig. 1 - Mockup of the homepage. Not finalized.</figcaption>
    </figure>
    <br>
    <br>
    <div class="center">
      <b-row>
        <b-col class="labelStyle">Timeline:</b-col>
        <b-col class="labelData">Oct 2018 - On Going</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">Project Type:</b-col>
        <b-col class="labelData">Personal</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">My Role:</b-col>
        <b-col class="labelData">Team Lead, Full-Stack developer</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">Tools:</b-col>
        <b-col class="labelData">Foundation, Vue.js, ASP.NET WebAPI,and SQL</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">Skills:</b-col>
        <b-col class="labelData">Project Management, Documentation, Web Design,and Front-end / Back-end Development</b-col>
      </b-row>
      <br>
      <b-row class="center">
        <a href="https://github.com/Zyxel-1/CookBase">Click here for more about CookBase</a><i class="fa fa-link"
          aria-hidden="true"></i>
      </b-row>
    </div>
    <div>
      <h2>Context</h2>
      <p>CookBase is a single page web application designed to organize, discover, and rate recipes. By creating such a
        platform, we can create a community of chefs ranging from amateurs to professionals.
        <br>
        <br>
        Project Scope / Target Audience:
        <ul>
          <li>This team will design and implement a single page web application (SPA) that will help users organize
            recipes and discover new ones.</li>
          <li>Will be supported on the latest (as of this writing) Google Chrome and Mozilla Firefox.</li>
          <li>Initial audience - North America (Canada, Mexico, and the United States)</li>
          <li>Application should handle between 200 - 500 concurrent users</li>
          <li>Age limit above 13 years of age</li>
        </ul>
      </p>
      <p>Currently under development. More information will be published here once the design phase has concluded.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookBase',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
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
  padding-right: 3px;
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
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #2f3336;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}

</style>
