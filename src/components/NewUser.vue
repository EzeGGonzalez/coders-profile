<template>
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-4 is-offset-4">
        <div class="box">

          <div class="notification is-danger" v-if="error">
            {{error}}
          </div>

          <form v-on:submit.prevent="register">
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input required class="input" type="email" placeholder="Email" v-model:email="form.email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left has-icons-right">
                <input required class="input" type="password" placeholder="Password" v-model:password="form.password">
                <span class="icon is-small is-left">
                  <i class="fa fa-key"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Empresa</label>
              <div class="control has-icons-left has-icons-right">
                <input required class="input" type="text" placeholder="Empresa" v-model:password="form.company">
                <span class="icon is-small is-left">
                  <i class="fa fa-building"></i>
                </span>
              </div>
            </div>

            <button class="button is-primary">Registrarse</button>
          </form>

          <br />

          <div class="is-righted">
            <router-link to="/auth">
              ¿Ya tenés usuario? Ingresá acá <span class="icon is-small is-left"><i class="fa fa-sign-in" aria-hidden="true"></i></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '@/api/firebase'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    register () {
      this.error = ''
      auth.createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => db.ref('/users').child(data.uid).set({company: this.form.company, email: this.form.email}))
        .catch(error => !!(this.error = error.message))
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
