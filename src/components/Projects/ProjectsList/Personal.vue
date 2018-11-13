<template>
  <div class="container">
    <h1>Personal Website: A showcase of projects and information</h1>
    <img src="..//..//..//assets/images/ProjectImages/PersonalWebsite/personalScreen.png" alt="Website on a mac.">
    <figure class="center">
      <figcaption>Fig. 1 - Current homepage.</figcaption>
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
        <b-col class="labelData">Front-End Developer</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">Tools:</b-col>
        <b-col class="labelData">BootStrap and Vue.js</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">Skills:</b-col>
        <b-col class="labelData">Project Management, Documentation, Web Design,and Front-end Development</b-col>
      </b-row>
      <br>
      <b-row class="center">
        <a href="https://github.com/Zyxel-1/PersonalWebsite/wiki/Current-Updates">Click here for more about my Personal Website</a><i class="fa fa-link"
          aria-hidden="true"></i>
      </b-row>
    </div>
    <div>
      <h2>Context</h2>
      <p>This is a personal project to show case my skills and work for people to see. I could of made a simple one page website but I wanted to test out my creativity and see what I can do. There are still somethings I would like to change but for now I am contempt with the design.
      </p>
    </div>
    <div>
      <h2>History</h2>
      <span class="subTitle">Never satisfied</span>
      <p>This project technically started back of the beginning of 2018 as a way to test out Github and learn basic commits and pushes. As time went on I started putting some stuff on here but I didn't really put too much effort until the beginning of October.</p>
      <img src="../../../assets/images/ProjectImages/PersonalWebsite/sample.gif" alt="First version of the website homepage.">
      <figure>
        <figcaption>Fig. 1 - First version of the website. Decided to make the video full screen.</figcaption>
      </figure>
      <p></p>
      <img src="../../../assets/images/ProjectImages/PersonalWebsite/mobile.gif" alt="First version of the website homepage.">
      <figure>
        <figcaption>Fig. 2 - Website now responsive to mobile browser.</figcaption>
      </figure>
      <p></p>
      <img src="../../../assets/images/ProjectImages/PersonalWebsite/error.gif" alt="First version of the website homepage.">
      <figure>
        <figcaption>Fig. 3 - Custom Error page. Note: Netlify interupts this for some reason.</figcaption>
      </figure>
      <img src="../../../assets/images/ProjectImages/PersonalWebsite/Nov12Version.gif" alt="Latest version of the website homepage.">
      <figure>
        <figcaption>Fig. 4 - Redid the homepage. Looks more modern and sleek. Broke compatibility with mobile though...</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personal',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
figure {
  font-style: italic;
  padding-top: 10px;
  padding-bottom: 10px;
}
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
</style>
