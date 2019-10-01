<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="column">© 2019 - Roberto Sanchez</div>
          <div class="columnRight">Last Modified on: {{msg}}</div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      msg: "October 2019"
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.footer {
  background-color: #292c2f;
  color: white;
}
.column {
  float: left;
  width: 50%;
}
.columnRight{
  float:right;
  width: 50%;
  text-align: right;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
