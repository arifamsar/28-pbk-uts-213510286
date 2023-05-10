<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ArrowLeftCircleIcon } from "@heroicons/vue/24/outline"
import { ArrowRightCircleIcon } from "@heroicons/vue/24/outline"
import { ArrowPathIcon } from "@heroicons/vue/24/outline";


const redirectToHome = () => {
  router.push({ path: '/' });
};

</script>
<template>
  <div id="app">
    <header>
      <div>
        <nav>
          <div class="text-teal-500">
            <RouterLink class="hover:text-teal-300" to="/">Home</RouterLink> |
            <RouterLink class="hover:text-teal-300" to="/myapp">MyApp</RouterLink> |
            <RouterLink class="hover:text-teal-300" to="/about">About</RouterLink>
          </div>
        </nav>

      </div>
    </header>
    <RouterView />
    <div class="py-10 sm:mx-auto text-center">
      <div class="inline-flex rounded-md shadow-sm">
        <button @click="$router.push({ path: '/' })"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-teal-100 border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          <ArrowPathIcon class="h-6 w-6 text-teal-600 mr-2" />
          Redirect
        </button>
        <button @click="$router.go(-1)"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-teal-100 border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          <ArrowLeftCircleIcon class="h-6 w-6 text-teal-600 mr-2" />
          Go Back
        </button>
        <button @click="$router.go(1)"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-teal-100 border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          <ArrowRightCircleIcon class="h-6 w-6 text-teal-600 mr-2" />
          Go Forward
        </button>
      </div>
    </div>
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
  background: #0f766e;
  border-radius: 10px;
}
</style>

<script>

</script>