<template>
  <div class="darkBackground screenHeight" id="Projects">
    <div class="container text-center">
      <br />
      <span class="sectionTitle">Projects</span>
      <p
        class="sectionSubTitle"
      >So of the projects that I have been working on either in school or on my freetime. All of these projects can be found on GitHub on their respective page.</p>
      <div class="row">
        <div class="col-md-7">
          <img
            class="img-fluid rounded mb-3 mb-md-0"
            src="./../../assets/images/ProjectImages/ProjectLogos/cookBaseLogo.png"
            alt
          />
        </div>
        <div class="col-md-5">
          <h3>CookBase</h3>
          <p>
            CookBase is a single page web application designed to organize, discover, and rate recipes. By creating
            such a platform, we can create a community of chefs ranging from amateurs to professionals.
          </p>
          <p>Built using: .NET Core, MS SQL, Vue.js, and Foundation</p>
          <b-link to="CookBase" class="button">View Project</b-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <img
            class="img-fluid rounded mb-3 mb-md-0"
            src="./../../assets/images/ProjectImages/ProjectLogos/personalWebsiteLogo.png"
            alt
          />
        </div>
        <div class="col-md-5">
          <h3>Personal Website</h3>
          <p>
            My personal website used to showcase additional information that couldn't fit on a resume, project
            details, and contact information.
          </p>
          <p>Built using: Vue.js and Bootstrap</p>
          <b-link to="Personal" class="btn btn-primary">View Project</b-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <img
            class="img-fluid rounded mb-3 mb-md-0"
            src="./../../assets/images/ProjectImages/ProjectLogos/whatfitsLogo.png"
            alt
          />
        </div>
        <div class="col-md-5">
          <h3>WhatFits</h3>
          <p>
            Addresses an issue in society to encourage social interactivity and promoting physical exercise by
            connecting people to workout and exercise and track their progress.
          </p>
          <p>Built using: ASP.NET WebAPI, MSSQL, Vue.js, and Bulma.</p>
          <b-link to="Whatfits" class="btn btn-primary">View Project</b-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <img
            class="img-fluid rounded mb-3 mb-md-0"
            src="./../../assets/images/ProjectImages/ProjectLogos/greyMessagingLogo.png"
            alt
          />
        </div>
        <div class="col-md-5">
          <h3>Grey Messaging</h3>
          <p>
            An end to end encrypted chat to securely transfer messages between two clients using encryption methods
            and diffie hellman key exchange.
          </p>
          <p>Built using: Node.js, MongoDb, and Express.</p>
          <b-link to="GreyMessaging" disabled class="btn btn-primary">View Project</b-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <img
            class="img-fluid rounded mb-3 mb-md-0"
            src="./../../assets/images/ProjectImages/ProjectLogos/cookieCodersLogo.png"
            alt
          />
        </div>
        <div class="col-md-5">
          <h3>CookieCoders</h3>
          <p>
            Group project for the Introductory Web Development class. Used to show information about a fictional
            coding summer camp and signing up for additional information.
          </p>
          <p>Built using: HTML, CSS, Javascript, mySQL, and PHP.</p>
          <b-link to="CookieCoders" class="btn btn-primary">View Project</b-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { serverBus } from '../../main.js'
export default {
  props: ['selectedOption'],
  name: 'Selector',
  components: {},
  methods: {
    projectSelected: function (option) {
      serverBus.$emit('projectSelected', option)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 320px) {
  .projectImg {
    width: 50%;
  }
}
.projectImg {
  width: 28em;
  padding-bottom: 1em;
}

.row {
  padding-bottom: 3em;
}

b-img {
  align-content: center;
}
.screenHeight {
  height: 100%;
}
.btn {
  background-color: #0051a8;
}
</style>
