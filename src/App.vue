<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div id="app">
    <header>
        <nav>
          <div class="text-slate-500">
            <RouterLink class="hover:text-slate-300" to="/">Home</RouterLink> |
            <RouterLink class="hover:text-slate-300" to="/myapp">MyApp</RouterLink> |
            <RouterLink class="hover:text-slate-300" to="/about">About</RouterLink> 
          </div>
        </nav>
    </header>
    
    <RouterView />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #ffff;
  background: #0d9488;
  border-radius: 10px;
}
</style>
