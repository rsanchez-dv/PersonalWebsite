<template>
  <div id="bg-color">
    <div class="container text-center sectionPadding">
      <span class="sectionTitle">Experiences</span>
      <p class="sectionSubTitle">[INSERT TEXT]</p>
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
              <li>Tutored C++, Data Structures, Java, Unix Programming, and Web Development Fundamentals. </li>
              <li>Consulted students on their projects to ensure best practices are implemented on their designs and code. </li>
              <li>Coordinated test preparation services with instructors to better prepare students.</li>
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
.row {
  padding-top: 2%;
  padding-bottom: 2%;
  border:1px solid black;
  border-radius:10px;
  padding-left: 15%

}
@media screen and (max-width: 330px) {
  #bg-color {
    color: #2b3033;
    height: 100%;
  }
}

@media screen and (min-width: 331px) {
  #bg-color {
    height: 100vh;
    color: #2b3033;
  }
}

</style>
