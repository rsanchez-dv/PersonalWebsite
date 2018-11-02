<template>
  <div class="container">
    <h1>CookBase: An online recipe management system</h1>
    <div class="loader">Loading...</div>
    <figure class="center">
      <figcaption>Fig. 1 - Homepage not completed</figcaption>
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
      <p>Enim deserunt est elit commodo sit est. Officia fugiat ea consequat nostrud irure dolore voluptate deserunt
        enim
        id eiusmod et. Ullamco consectetur consequat excepteur et laborum exercitation reprehenderit culpa dolore nulla
        aliqua fugiat. Laboris culpa nulla ut tempor tempor dolor nisi nulla esse nostrud. Ad cupidatat dolor mollit ad
        ut incididunt nisi ad minim aliqua aute duis. Eu nisi anim culpa pariatur cupidatat exercitation mollit.</p>
    </div>
    <div>
      <h2>Title</h2>
      <span class="subTitle">Come up with a subTitle</span>
      <p>Enim deserunt est elit commodo sit est. Officia fugiat ea consequat nostrud irure dolore voluptate deserunt
        enim
        id eiusmod et. Ullamco consectetur consequat excepteur et laborum exercitation reprehenderit culpa dolore nulla
        aliqua fugiat. Laboris culpa nulla ut tempor tempor dolor nisi nulla esse nostrud. Ad cupidatat dolor mollit ad
        ut incididunt nisi ad minim aliqua aute duis. Eu nisi anim culpa pariatur cupidatat exercitation mollit.</p>
      <img src="../../../assets/images/ErrorImages/nothing.jpg">
    </div>
    <div>
      <h2>Problem Statement</h2>
      <p>Tempor do ullamco laboris duis mollit est et laborum. Id et ex id nisi amet in ad. Laboris excepteur ea
        pariatur dolor. Adipisicing eiusmod pariatur laboris laborum officia Lorem aliquip veniam esse exercitation.
        Mollit nulla irure sit et.</p>
    </div>
    <div>
      <h2>Solution</h2>
      <span class="subTitle">SubTitle</span>
      <p>Tempor laborum officia deserunt elit culpa cupidatat et sint aute eu culpa mollit. Deserunt amet cupidatat est
        reprehenderit dolore esse. Aliquip enim reprehenderit dolore cupidatat irure amet. Aliquip ut nulla est
        exercitation. Non cillum fugiat minim duis officia. Mollit ex aliqua excepteur labore. Culpa Lorem minim fugiat
        in pariatur nostrud cillum nulla et sint sint excepteur nostrud Lorem.</p>
    </div>
    <div>
      <h2>Final MVP</h2>
      <span class="subTitle">Eventually</span>
      <p>Commodo enim quis proident consectetur fugiat dolore exercitation dolore pariatur non sint. Fugiat ad sunt
        dolore pariatur officia magna reprehenderit elit est sunt veniam. Elit do laborum irure enim aliquip id anim
        laboris ipsum Lorem. Eu tempor occaecat in tempor aliqua sit.</p>
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
