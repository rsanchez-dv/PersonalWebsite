<template>
  <div id="bg-color">
    <div class="container center">
<span class="sectionTitle">Experience</span>
    <div class="row container">
        <div class="col-md-7">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="./../../assets/images/HomePageImages/elco.png"
              alt="">
          </a>
        </div>
        <div class="col-md-5">
          <h3>Computer Science Tutor</h3>
          <p>
            CookBase is a single page web application designed to organize, discover, and rate recipes. By creating
            such a platform, we can create a community of chefs ranging from amateurs to professionals.</p>
          <p>Built using: .NET Core, MS SQL, Vue.js, and Foundation</p>
          <b-link to="CookBase" class="btn btn-primary">View Project</b-link>
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
img{
  padding-top: 2em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.row{
  padding-top:5%;
}
@media screen and (max-width: 330px){
    #bg-color{
      color:#2b3033;
      height: 100%;
  }
}
@media screen and (min-width: 331px){
#bg-color{
    height: 100vh;
    color:#2b3033;
}
}
</style>
