<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/myapp">MyApp</RouterLink> |
        <RouterLink to="/about">About</RouterLink> 
      </nav>
  </header>

  <RouterView />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #ffff;
  background: #14b8a6;
  border-radius: 10px;
}
</style>
