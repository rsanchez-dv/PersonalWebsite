<template>
  <div>
    <!-- Jumbotron   -->
    <div class="jumbotron jumbotron-fluid">
      <video autoplay muted loop poster="https://dummyimage.com/900x400/000/fff">
        <source src="../../assets/backgrounds/mood.webm" data-src="" type="video/webm">
      </video>
      <div class="container text-white" id="titlePage">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
          featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      </div>
    </div>
    <div class="container">
      <!--Content Slide 1-->
      <b-container>
          <h1>About Me:</h1>
          <hr>
          <b-row>
            <b-col sm="4">
            <img src="../../assets/images/HomePageImages/profile.gif">
            </b-col>
            <b-col sm="7">
                <b-row>
                    <p>Adipisicing minim dolore non sint tempor qui cupidatat. Culpa ipsum velit deserunt ut do deserunt non dolor adipisicing quis proident. Ea occaecat cillum eu consequat est culpa cupidatat excepteur veniam. Et cillum consequat exercitation pariatur consectetur nisi proident velit labore sunt. Commodo laborum irure sit sit eu consectetur est. Duis nulla deserunt excepteur occaecat id cupidatat commodo voluptate magna.</p>
                </b-row>
                <b-row>
                    <p>Consectetur labore occaecat voluptate quis pariatur Lorem ipsum. Ullamco dolor tempor in do. Exercitation pariatur aute voluptate culpa reprehenderit commodo consectetur sint et.</p>
                </b-row>
            </b-col>
          </b-row>
      </b-container>
      <br>
      <!--Content Slide 2-->
      <b-container>
          <h1>Education</h1>
          <hr>
          <br>
          <b-row>
              <b-col sm="4">
                  <img src="../../assets/images/HomePageImages/csulbLogo.png" fluid-grow>
              </b-col>
              <b-col sm="7">
                  <b-row>
                        <h3>California State University, Long Beach</h3>
                  </b-row>
                  <b-row class="location">Long Beach, California</b-row>
                  <b-row><p class="date">Jan 2016 - May 2018</p></b-row>
                  <b-row>
                      <p>Aliqua aliquip et do do. Adipisicing Lorem laborum veniam sunt sit nisi consequat sunt ad esse commodo. Do id labore velit sint elit incididunt nisi ad eu fugiat. Aliqua sit deserunt nostrud aliquip irure labore laboris in commodo Lorem quis sint dolor voluptate. Mollit officia ea ullamco eiusmod aute irure Lorem id minim id. Eu proident eu aute nostrud ea eiusmod laboris do dolor officia fugiat dolore sunt veniam.</p>
                  </b-row>
              </b-col>
          </b-row>
          <br>
          <b-row>
              <b-col sm="4">
                  <img src="../../assets/images/HomePageImages/elco.png" fluid>
              </b-col>
              <b-col sm="7">
                  <b-row>
                      <h3>El Camino Community College</h3>
                  </b-row>
                  <b-row class="location">Torrance, California</b-row>
                  <b-row><p class="date">Jan 2011 - Dec 2015</p></b-row>
                  <b-row>
                      <p>Duis aute ad veniam do magna. Aliqua adipisicing tempor elit id ad irure voluptate. Eu duis do non officia. Consequat fugiat amet adipisicing enim veniam duis dolor. Non consequat dolore deserunt pariatur. Id aute consequat qui sit aute anim ea ex et pariatur amet.</p>
                  </b-row>
              </b-col>
          </b-row>
      </b-container>
      <!--Content Slide 3-->
        <b-container>
        <h1>Skills</h1>
        <hr>
        <b-row>
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
        <b-row>
            <b-col>
               <i id="skillIcon" class="fas fa-users"></i>Inter-Personal Skills
            </b-col>
            <b-col>
                <ul>
                    <li>Team Leader</li>
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
        <b-row>
            <b-col>
               <i id="skillIcon" class="fas fa-drafting-compass"></i>Miscellaneous Stuff
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
                    <li>Amazone Web Services</li>
                    <li>Agile / Scrum</li>
                    <li>Linux</li>
                </ul>
            </b-col>
        </b-row>
        </b-container>
      <!--Content Slide 4-->
      <b-container>
          <h1>Experiences</h1>
          <hr>
          <b-row>
              <b-col sm="4">
                  <img src="../../assets/images/HomePageImages/mesalogo.jpg" fluid-grow>
              </b-col>
              <b-col sm="7">
                  <b-row>
                        <h3>Computer Science Tutor</h3>
                  </b-row>
                  <b-row class="location">El Camino Community College</b-row>
                  <b-row class="location">Torrance, California</b-row>
                  <b-row><p class="date">Jan 2016 - May 2018</p></b-row>
                  <b-row>
                      <p>Aliqua aliquip et do do. Adipisicing Lorem laborum veniam sunt sit nisi consequat sunt ad esse commodo. Do id labore velit sint elit incididunt nisi ad eu fugiat. Aliqua sit deserunt nostrud aliquip irure labore laboris in commodo Lorem quis sint dolor voluptate. Mollit officia ea ullamco eiusmod aute irure Lorem id minim id. Eu proident eu aute nostrud ea eiusmod laboris do dolor officia fugiat dolore sunt veniam.</p>
                  </b-row>
              </b-col>
          </b-row>
      </b-container>
      <!--Content Slide 5-->
      <b-container>
          <h1>Projects</h1>
          <hr>
          <p>Ipsum eiusmod laborum cupidatat ut consequat. Tempor elit dolor excepteur nostrud ut sint pariatur occaecat officia irure nostrud voluptate velit ad. Labore dolore est dolor deserunt labore dolor. Sit labore dolore cupidatat quis anim do sunt commodo minim sunt ullamco ea enim do.</p>
          <b-card-group deck>
        <b-card title="Card Title"
          img-src="../../assets/images/ErrorImages/nothing.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  <b-card title="Card Title"
          img-src="../../assets/images/ErrorImages/nothing.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  <b-card title="Card Title"
          img-src="../../assets/images/ErrorImages/nothing.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
    </b-card-group>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Content',
  components: {}
}
/* eslint-disable */
function deferVideo() {
$('video source').each(function () {
    var sourceFile = $(this).attr('data-src')
    $(this).attr('src', sourceFile)
    var video = this.parentElement
    video.load()
})
}
window.onload = deferVideo
</script>

<style scoped>
.location {
  font-style: italic;
  font-weight: bold;
}

.date {
  font-style: italic;
}

#titlePage {
  padding-top: 25vh;
}

img {
  width: 10em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  padding-bottom: 2em;
}

.jumbotron {
  position: relative;
  overflow: hidden;
  background-color: black;
  height: 100vh;
}

.jumbotron video {
  position: absolute;
  object-fit: cover;
  z-index: 1;
  top: 0;
  width: auto;
  height: 100%;
  opacity: 0.5;
}

.jumbotron .container {
  z-index: 2;
  position: relative;
}

#skillIcon {
  padding-right: 10px;
}
</style>