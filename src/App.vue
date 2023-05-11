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
    <header class="bg-transparent fixed top-0 left-0 w-full flex items-center z-10">
      <div class="container">
        <nav class="flex items-center justify-center p-7">
          <div class="text-teal-500">
            <RouterLink class="hover:text-teal-300 p-2.5 font-semibold border rounded-lg focus:ring-3 border-none focus:ring-teal-700" to="/">Home</RouterLink> |
            <RouterLink class="hover:text-teal-300 p-2.5 font-semibold border rounded-lg focus:ring-3 border-none focus:ring-teal-700" to="/myapp">MyApp</RouterLink> |
            <RouterLink class="hover:text-teal-300 p-2.5 font-semibold border rounded-lg focus:ring-3 border-none focus:ring-teal-700" to="/about">About</RouterLink>
          </div>
        </nav>
      </div>
    </header>
    <RouterView class="pt-32"></RouterView>
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
  text-align: center;
}

nav a.router-link-exact-active {
  @apply text-white;
  @apply bg-teal-600;
}
.navbar-fixed {
    @apply fixed z-[9999] bg-white bg-opacity-80;
    backdrop-filter: blur(5px);
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
}
</style>

<script>
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
}
</script>