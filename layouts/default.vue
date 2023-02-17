<template>
  <div class="relative">
    <Background />
    <div class="z-10 md:min-h-screen">
      <Navbar :menu="menuItems" />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Background from '../components/Background.vue'

export default {
  components: {
    Navbar,
    Background,
  },
  scrollToTop: true,
  data() {
    return {
      menuItems: {
        0: {
          title: 'Oferta',
          link: '/oferta',
        },
        1: {
          title: 'Galeria',
          link: '/galeria',
        },
        2: {
          title: 'Kontakt',
          link: '/kontakt',
        },
      },
    }
  },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}

.page-enter-from,
.page-enter,
.page-leave-to {
  opacity: 0;
}

.page-enter-from .fade-left,
.page-enter .fade-left,
.page-leave-to .fade-left {
  transform: translateX(-20px);
}

.page-enter-from .fade-right,
.page-enter .fade-right,
.page-leave-to .fade-right {
  transform: translateX(20px);
}
</style>
