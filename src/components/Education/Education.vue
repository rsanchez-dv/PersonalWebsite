<template>
  <div id="bg-color">
    <section class="content-section" id="portfolio">
      <div class="container">
        <div class="content-section-heading text-center">
          <span class="sectionTitle">Education</span>
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
  @media screen and (max-width: 768px){
      #bg-color{
          background-color: #2b3033;
          height: 100%;
          color:white;
      }
  }
  @media screen and (min-width:769px){
      #bg-color{
          background-color: #2b3033;
          height: 100vh;
          color:white;
      }
  }
#csulbLogo{
  height: 18em;
}
</style>
