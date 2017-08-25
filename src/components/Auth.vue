<template>
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-4 is-offset-4">
        <div class="box">
          <form v-on:submit.prevent="login">
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Email" v-model:email="form.email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="password" placeholder="Password" v-model:password="form.password">
                <span class="icon is-small is-left">
                  <i class="fa fa-key"></i>
                </span>
              </div>
            </div>

            <button class="button is-primary">Ingresar</button>
          </form>

          <br />

          <div class="is-righted">
            <router-link to="/nuevo-usuario">
              Soy un usuario nuevo <span class="icon is-small is-left"><i class="fa fa-user-plus" aria-hidden="true"></i></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '@/api/firebase'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      auth.signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => this.$router.push('/coders'))
        .catch(error => console.log('error', error.message))
    }
  },
  created () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/coders')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
button {
  margin-top: 1rem;
  width: 100%;
}

.is-righted {
  text-align: right;
}
</style>
