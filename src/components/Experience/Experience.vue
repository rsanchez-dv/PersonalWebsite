<template>
  <div class="lightBackground screenHeight" id="Experience">
    <div class="container text-center">
      <span class="sectionTitle">Experiences</span>
      <p class="sectionSubTitle">Current work history detailing my responsiblities and achievements. This section can be expanded with your help.</p>
      <div class="centerBody">
<div class="row">
        <div class="col text-left">
            <h3>Web Solutions and Such</h3>
            <span class="jobDate">September 2018 - Today</span>
            <br>
            <span class="position"> Freelance Web Developer</span>
            <br>
            <span>Los Angeles, California</span>
            <br>
            <ul>
              <li>Interact with clients to determine the best possible solution for their needs.</li>
              <li>Increased customer traffic to client's businesses by providing modern web development solutions and social media integration.</li>
              <li>Provided 1-on-1 technical support via email and phone, and in person.</li>
            </ul>
        </div>
      </div>
      <div class="row">
        <div class="col text-left">
            <h3>El Camino College</h3>
            <span class="jobDate">August 2015 - May 2016</span>
            <br>
            <span class="position"> Computer Science Tutor</span>
            <br>
            <span>Torrance, California</span>
            <br>
            <ul>
              <li>Offered tutoring services on either a one-on-one basis or group sessions of eight or more.</li>
              <li>Improved retention rate of students in their classes.</li>
              <li>Coordinated test preparation services with instructors to better prepare students.</li>
              <li>Tutored the following: C++, Java, Unix Programming, Data Structures, and web development</li>
            </ul>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jobDate{
font-style: italic;
}
.position{
font-weight: bold;
}
.row {
  padding-top: 2%;
  padding-bottom: 2%;
  border:1px solid black;
  border-radius:10px;
  padding-left: 15%;
  margin-top: 2em;
}
.screenHeight{
    height: 100%;
  }
  @media screen and (max-width: 320px){
  .sectionSubTitle{
    font-size: 1em;
  }
  .centerBody{
    padding:0%;
  }
  .row{
    padding:0%;
    border:none;
  }
}
@media screen and (max-width: 425px) {
 .row{
   padding:5%;
 }
 .centerBody{
   padding:10%;
 }
}
@media screen and (min-width:2560px){
  .screenHeight{
    height: 100vh;
  }
}
</style>
