<template>
  <div>
    <h1>{{pageTitle}}</h1>
    <div>
      <span class="control">
                <button class="button is-link" v-on:click="goBack" >Create New User</button>
      </span>
    </div>
    <br>
    <div>
        <form name="UserManagement" action="http://localhost:8081/UserManagement" method="POST">
            <div>
                <label for="username"> Username</label>
                <input v-model="username" class="input" id="email" type="email" placeholder="testUser123" autocomplete="current-username" />
                <select v-model="selected">
                <option disabled value="">Status</option>
                <option>General</option>
                <option>Admin</option>
                <option>Disable</option>
                </select>
                <span>
                <button @click.prevent="searchUsername">Apply Change</button>
            </span>
            </div>
            <br />
            <span class="control">
                <button class="button is-link" v-on:click="goBack" >Go Back Button</button>
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
  name: 'UserManagement',
  computed: {
    isAuthenticated: function () {
      return this.$store.getters.isAuthenticated
    }
  },
  data () {
    return {
      pageTitle: 'UserManagement Page',
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
