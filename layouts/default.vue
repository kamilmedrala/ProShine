<template>
  <div class="bg-gray-dark">
      <Navbar/>
      <Nuxt/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
    components: { 
        Navbar 
    }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>