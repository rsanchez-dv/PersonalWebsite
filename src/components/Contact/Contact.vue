<template>
  <div id="bg-color">
    <div class="container text-center sectionPadding" id="Contact">
      <span class="sectionTitle">Contact Me</span>
      <p class="sectionSubTitle">If you want to contact me over anything feel free to drop a message on either of these platforms that I am on.</p>
      <b-card-group deck class="mb-3">
        <b-card border-variant="secondary" img-alt="image of email" img-src="../../assets/images/ContactImages/outlook.jpg"
          align="center">
          <p class="card-text">For direct communication to me.</p>
          <b-button href="mailto:rsanchez92@live.com" variant="primary">Email</b-button>
        </b-card>
        <b-card border-variant="secondary" img-alt="image of linkedin" img-src="../../assets/images/ContactImages/linkedIn.png"
          align="center">
          <p class="card-text">A shorter version of this website or for networking.</p>
          <b-button href="https://www.linkedin.com/in/robertosanchez92/" variant="primary">LinkedIn</b-button>
        </b-card>
        <b-card border-variant="secondary" img-alt="image of github" img-src="../../assets/images/ContactImages/github.png"
          align="center">
          <p class="card-text">My place of creativity and work. Mostly updated weekly.</p>
          <b-button href="https://github.com/Zyxel-1" variant="primary">Github</b-button>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  components: {}
}

</script>

<style scoped>
  #padding {
    padding-bottom: 5em;
  }
#bg-color{
  color:#2b3033;
  background-color: white;
  height: 100%;
}
</style>
