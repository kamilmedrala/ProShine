<template>
  <div class="w-full">
    <ClientOnly>
      <swiper-container ref="containerRef"
        class="swiper-container h-[300px] md:h-[500px] 2xl:h-[640px] w-full rounded-l-md md:rounded-md !overflow-visible"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :autoplay="true"
        :loop="true"
        :parallax="true"
        :speed="1000">
        <swiper-slide v-for="(item, index) in data" :key="index"
          class="swiper-slide max-w-full !w-3/4 md:!w-2/3 self-center h-full [&:not(.swiper-slide-active)]:h-3/4 transition-all duration-500 overflow-hidden px-2.5 md:px-5">
          <div class="swiper-img-container relative w-full h-full rounded-md overflow-hidden">
            <!--
              Stays a plain <img> on the raw WordPress URL: this carousel is inside
              <ClientOnly>, so it never reaches the prerendered HTML, and `nuxi generate`
              only emits /_ipx/ files for images it finds there — nuxt-picture here would
              point at /_ipx/ URLs that were never built (404 on the static host).
            -->
            <img v-if="item.full_image_url" :src="item.full_image_url"
              :alt="item.alt ? item.alt : 'Realizacja PRO SHINE'"
              :title="item.title ? item.title : 'Realizacja PRO SHINE'"
              class="relative z-10 bg-gray-light size-full object-cover rounded-md" loading="lazy"
              decoding="async" data-swiper-parallax="150" />
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <div class="container">
      <div class="hidden md:flex justify-end mt-3">
        <button
          class="swiper-button-prev swiperGallery-prev cursor-pointer group relative overflow-hidden w-14 h-14 flex items-center justify-center rounded-full border border-solid border-gray-dark/50 hover:border-gold transition text-gray-main"
          @click="swiper.prev()">
          <span
            class="block absolute top-0 left-0 -translate-x-full duration-200 transition group-hover:translate-x-0 w-[120%] h-[120%] bg-white"></span>
          <span class="flex group-hover:-translate-x-full transition duration-300">
            <svg
              class="transform basis-full flex-shrink-0 rotate-180 invert-0 group-hover:invert invert-fix filter transition-[filter] duration-200"
              width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="8.5" x2="25" y2="8.5" stroke="#909090" />
              <line x1="17.3536" y1="0.646447" x2="25.6267" y2="8.9196" stroke="#909090" />
              <line x1="25.4854" y1="8.35355" x2="17.3537" y2="16.4853" stroke="#909090" />
            </svg>
            <svg
              class="transform basis-full flex-shrink-0 rotate-180 invert-0 group-hover:invert invert-fix filter transition-[filter,transform] duration-200"
              width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="8.5" x2="25" y2="8.5" stroke="#909090" />
              <line x1="17.3536" y1="0.646447" x2="25.6267" y2="8.9196" stroke="#909090" />
              <line x1="25.4854" y1="8.35355" x2="17.3537" y2="16.4853" stroke="#909090" />
            </svg>
          </span>
        </button>
        <button
          class="swiper-button-next swiperGallery-next cursor-pointer ml-3 group relative overflow-hidden w-14 h-14 flex items-center justify-center rounded-full border border-solid border-gray-dark/50 hover:border-gold transition text-gray-main"
          @click="swiper.next()">
          <span
            class="block absolute top-0 right-0 translate-x-full duration-200 transition group-hover:translate-x-0 w-[120%] h-[120%] bg-white"></span>
          <span class="flex justify-end group-hover:translate-x-full transition duration-300">
            <svg
              class="transform basis-full flex-shrink-0 invert-0 group-hover:invert invert-fix filter transition-[filter] duration-200"
              width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="8.5" x2="25" y2="8.5" stroke="#909090" />
              <line x1="17.3536" y1="0.646447" x2="25.6267" y2="8.9196" stroke="#909090" />
              <line x1="25.4854" y1="8.35355" x2="17.3537" y2="16.4853" stroke="#909090" />
            </svg>
            <svg
              class="transform basis-full flex-shrink-0 invert-0 group-hover:invert invert-fix filter transition-[filter,transform] duration-200"
              width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="8.5" x2="25" y2="8.5" stroke="#909090" />
              <line x1="17.3536" y1="0.646447" x2="25.6267" y2="8.9196" stroke="#909090" />
              <line x1="25.4854" y1="8.35355" x2="17.3537" y2="16.4853" stroke="#909090" />
            </svg>
          </span>
        </button>
      </div>
      <EffectAppear class="mt-5 md:mt-10">
        <UiButton :url="'/galeria'" :text="'Zobacz galerię'" :center="true" />
      </EffectAppear>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
  },
})

const containerRef = ref(null)
const swiper = useSwiper(containerRef)

</script>

<style scoped>
/* Height is driven by the slide itself (h-full / h-3-4 in the template) so it always
   resolves against the carousel's fixed height, never against the image's own size. */
.swiper-slide .swiper-img-container {
  transition-property: opacity;
  transition-duration: 500ms;
}

.swiper-slide:not(.swiper-slide-active) .swiper-img-container {
  @apply opacity-75;
}
</style>
