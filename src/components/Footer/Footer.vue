<template>
<div>
<footer class="footer">
      <div class="container">
        <span class="text-left">© 2019 - Roberto Sanchez</span> <span class="text-right">Last Modified on {{msg}}</span>
      </div>
    </footer>
</div>
</template>
<script>
export default {
  data () {
    return {
      msg: '03/07/19'
    }
  },
  created () {
    // this.lastModifiedPage()
  },
  methods: {
    lastModifiedPage () {
      this.msg = document.lastModified
    }
  }
}
</script>

<style scoped>
.footer {
background-color: #292c2f;
color: white;
}

</style>
