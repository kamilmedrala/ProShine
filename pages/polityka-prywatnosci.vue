<template>
    <div class="pt-20 px-[5%] mx-auto lg:container overflow-hidden ">
      <HeaderSection class="fade-left transition duration-200 " :title="'Polityka prywatności'" :h1="true" />
    </div>
  </template>
  
  <script>
  import Hero from '../components/Hero.vue'
  import HeaderSection from '../components/HeaderSection.vue'
  export default {
    name: 'PolicyPage',
    components: {
      Hero,
      HeaderSection,
    },
  }
  </script>
  
  <style></style>
  