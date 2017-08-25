<template>
  <div class="hero is-fullheight is-light" id="app">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link class="navbar-item" v-bind:to="loggedIn ? '/coders' : '/auth'">
          <img src="./assets/iso.png" alt="Ada">
        </router-link>

        <router-link class="navbar-item" v-bind:to="loggedIn ? '/coders' : '/auth'">
          Ada | Feria de talentos
        </router-link>
      </div>

       <div class="navbar-menu">
         <div class="navbar-end">
            <a class="navbar-item is-hidden-desktop-only tooltip is-tooltip-left" v-on:click="logout" data-tooltip="'Cerrar sesión'">
              <span class="icon">
                <i class="fa fa-sign-out"></i>
              </span>
            </a>
          </div>
       </div>
    </nav>

    <div class="hero-body">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'app',
  methods: {
    logout () {
      firebase.auth().signOut()
    }
  },
  computed: {
    loggedIn () {
      return !!firebase.auth().currentUser
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  color: white;

  .navbar-menu {
    .navbar-item {
      background-color: transparent;
    }
  }

  .navbar-brand {
    color: white;

    img {
      height: 1.5rem;
    }

    .navbar-item {
      background-color: transparent;
    }
  }
}
</style>
