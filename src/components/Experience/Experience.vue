<template>
  <div id="bg-color">
    <div class="container text-center sectionPadding">
      <span class="sectionTitle">Experiences</span>
      <p class="sectionSubTitle">Here is a short work history detailing my responsiblities and achievements. This section can be expanded with your help.</p>
       <div class="row">
        <div class="col text-left">
            <h3>Web Solutions and Such</h3>
            <span id="jobDate">September 2018 - Today</span>
            <br>
            <span id="position"> Freelance Web Developer</span>
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
            <span id="jobDate">August 2015 - May 2016</span>
            <br>
            <span id="position"> Computer Science Tutor</span>
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
</template>

<script>
export default {
  name: 'Blank'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#jobDate{
font-style: italic;
}
#position{
font-weight: bold;
}

@media screen and (max-width: 595px) {
  #bg-color {
    color: #2b3033;
    background-color: white;
    height: 100%;
  }
  .row {
  padding-top: 2%;
  padding-bottom: 2%;
  border:1px solid black;
  border-radius:10px;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 2em;
}
}

@media screen and (min-width: 596px) {
  #bg-color {
    color: #2b3033;
    background-color: white;
  }
  .row {
  padding-top: 2%;
  padding-bottom: 2%;
  border:1px solid black;
  border-radius:10px;
  padding-left: 15%;
  margin-top: 2em;
}
}

</style>
