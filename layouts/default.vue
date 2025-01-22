<template>
  <div class="md:min-h-screen flex flex-col justify-between">
    <LayoutNavbar :menu="menuItems" />
    <slot />
    <FeaturePopupCookies />
    <LayoutFooter class="self-end" :menu="footerItems" />
  </div>
</template>


<script setup>

const menuItems = ref({
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
})

const footerItems = ref({
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
  3: {
    title: 'Polityka prywatności',
    link: '/polityka-prywatnosci',
  },
})

useHead({
  htmlAttrs: {
    lang: 'pl',
  },
  title: 'PRO SHINE - Auto Detailing',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content:
        'PRO SHINE - Auto Detailing Skrzyszów, Śląsk. Przywróć swój samochód do stanu salonowego! Auto-detailing, regeneracja reflektorów, powłoki ceramiczne, pranie wnętrz, ozonowanie, przygotowania przed sprzedarzą i wiele innych! ',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
},)
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(8px);
}
</style>
