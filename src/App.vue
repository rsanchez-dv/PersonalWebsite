<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <back-to-top bottom="50px" right="50px" visibleoffset="200">
      <button
        type="button"
        aria-label="Back to Top"
        class="btn btn-info btn-to-top"
        id="backToTopButton"
      >
        <i class="fa fa-chevron-up"></i>
      </button>
    </back-to-top>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import BackToTop from "vue-backtotop";

export default {
  name: "App",
  components: {
    NavBar,
    BackToTop
  }
};
</script>

<style>
#backToTopButton {
  background-color: #2f3336;
  border-color: white;
}
body:before {
  content: "";
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
button {
  background: #1aab8a;
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
}
button:hover {
  background: #fff;
  color: #1aab8a;
}
button:before,
button:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #1aab8a;
  transition: 400ms ease all;
}
button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
button:hover:before,
button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
</style>
