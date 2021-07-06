<template>
  <div class="lightBackground screenHeight" id="Contact">
    <div class="container text-center">
      <span class="sectionTitle">Contact Me</span>
      <p class="sectionSubTitle">
        If you want to contact me over anything feel free to drop a message on
        either of these platforms that I am on.
      </p>
      <b-card-group deck class="mb-3">
        <b-card
          border-variant="secondary"
          :img-src="require('../../assets/images/ContactImages/outlook.jpg')"
          img-alt="image of email"
          align="center"
        >
          <p class="card-text">For direct communication to me.</p>
          <b-button href="mailto:rsanchez92@live.com" variant="primary"
            >Email</b-button
          >
        </b-card>
        <b-card
          border-variant="secondary"
          img-alt="image of linkedin"
          :img-src="require('../../assets/images/ContactImages/linkedIn.png')"
          align="center"
        >
          <p class="card-text">
            A shorter version of this website or for networking.
          </p>
          <b-button
            href="https://www.linkedin.com/in/robsanchez92/"
            variant="primary"
            >LinkedIn</b-button
          >
        </b-card>
        <b-card
          border-variant="secondary"
          img-alt="image of github"
          :img-src="require('../../assets/images/ContactImages/github.png')"
          align="center"
        >
          <p class="card-text">
            My place of creativity and work. Mostly updated weekly.
          </p>
          <b-button href="https://github.com/rsanchez-dv" variant="primary"
            >Github</b-button
          >
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
/* eslint-disable  */
export default {
  name: "Contact",
  components: {},
};
</script>

<style scoped>
.screenHeight {
  height: 100%;
}
@media screen and (min-width: 2560px) {
  .screenHeight {
    height: 100vh;
  }
}
.btn {
  background-color: #0051a8;
}
</style>
