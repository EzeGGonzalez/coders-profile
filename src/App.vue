<template>
  <div class="hero is-fullheight is-light" id="app">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="./assets/iso.png" alt="Ada">
        </a>

        <div class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <div class="hero-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  .navbar-brand img {
    height: 1.5rem;
  }
}
</style>
