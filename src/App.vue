<template>
  <div id="app">
    <!-- Just an image -->
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="#">
        <img src="./assets/iso.png" alt="Ada">
      </b-navbar-brand>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav .navbar-brand img {
  height: 1.5rem;
}
</style>
