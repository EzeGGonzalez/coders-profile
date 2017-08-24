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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

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
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => console.log(firebase.auth().currentUser))
        .catch(error => console.log(error.message))
    }
  }
}
</script>

<style lang="scss">
button {
  margin-top: 1rem;
  width: 100%;
}
</style>
