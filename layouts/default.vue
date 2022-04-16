<template>
  <div class="relative px-[5%]">
    <Background/>
    <div class="z-10 min-h-screen">
      <Navbar :menu="menuItems"/>
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Background from "../components/Background.vue";

export default {
    components: {
    Navbar,
    Background
  },
  scrollToTop: true,
  data(){
        return{
            menuItems:{
                0:{
                    title: 'Oferta',
                    link: '/oferta'
                },
                1:{
                    title: 'Realizacje',
                    link: '/realizacje'
                },
                2:{
                    title: 'Kontakt',
                    link: '/kontakt'
                },
            }
        }
    },
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
  scroll-behavior: smooth;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>