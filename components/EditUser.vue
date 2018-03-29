
<script defer s rc="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<template>
  <div>
    <h1>{{pageTitle}}</h1>
    <div>
        <h2>Admin Section</h2>
        <form name="EditUser" action="http://localhost:8081/edituser" method="POST">
            <div class="select">
  <select>
    <option>Select dropdown</option>
    <option>With options</option>
  </select>
</div>
            <div>
                <label for="username"> New Password: </label>
                <input v-model="password" class="input" id="password" type="email" placeholder="testUser123" autocomplete="current-username" />
            </div>
            <br />
            <span>
                <button @click.prevent="searchUsername">Edit Password</button>
            </span>
            <br /><br />
            <div>
                <label for="status"> New Password:</label>
            </div>
        </form>
        <h2>General Section</h2>
        <form name="EditUser" action="http://localhost:8081/edituser" method="POST">
            <div>
                <label for="username"> Search by Username</label>
                <input v-model="username" class="input" id="email" type="email" placeholder="testUser123" autocomplete="current-username" />
            </div>
            <br />

            <span class="control">
                <button class="button is-link" v-on:click="goBack" >Go Back Button</button>
            </span>
            <span>
                <button @click.prevent="searchUsername">Search User</button>
            </span>
        </form>
        <br /><br />
        <div v-show="hasErrored === true">
          <span class="error">
            {{pageError}}
          </span>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  computed: {
    isAuthenticated: function () {
      return this.$store.getters.isAuthenticated
    }
  },
  data () {
    return {
      pageTitle: 'Edit User Page',
      hasErrored: false,
      pageError: '',
      username: ''
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    signIn () {
      if (this.$data.username !== 'test' || this.$data.password !== 'test') {
        this.$data.hasErrored = true
        this.$data.pageError = 'Invalid username and/or password'
        return false
      }

      this.$store.dispatch('signIn', {authStatus: true, username: this.$data.username})

      // Make a call to the server to authenticate user
      axios({
        method: 'POST',
        url: 'http://localhost:8081/signIn',
        data: { username: this.$data.username, password: this.$data.password },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        }
      })
        .then((response) => {
          this.$log('Login success')

          // Should be blank since cookie domain is not set
          this.$log(['cookie', document.cookie])
          this.$data.hasErrored = false

          this.$router.push('Secure') // Use of .replace will cause cookie domain to not be set
        }).catch((error) => {
          this.$data.hasErrored = true
          this.$data.pageError = 'XHR request failed'

          if (error.response) {
            // Server returned a response, but was not 200 OK
            this.$log('Request FAILED')
          } else if (error.request) {
            // Unable to complete request
            this.$log('Request Timeout or request not able to be executed')
          } else {
            // Error in callback
            this.$log('Callback error')
          }
        })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

button:hover {
    cursor: pointer;
}
</style>
