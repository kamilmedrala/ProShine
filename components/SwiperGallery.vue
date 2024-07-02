<template>
  <div class="w-full overflow-hidden">
    <div
      ref="swiper"
      class="swiper swiper-container mx-auto lg:container h-[300px] md:h-[500px] md:aspect-video w-full rounded-l-md md:rounded-md !overflow-visible"
    >
      <div class="swiper-wrapper items-center">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="swiper-slide max-w-full !w-3/4 md:!w-2/3 first:rounded-l-md overflow-hidden px-2.5 md:px-5"
        >
          <div class="w-full h-full relative z-30">
            <nuxt-picture
              
              v-if="item.full_image_url"
              preload
              sizes="100px xs:200px sm:450px md:60vw lg:60vw xl:60vw xxl:1200px"
              fit="outside"
              format="webp"
              class="block w-full h-full md:rounded-md overflow-hidden"
              :src="item.full_image_url"
              :title="item.title ? item.title : 'banner image'"
              :alt="item.alt ? item.alt : 'banner image'"
              :imgAttrs="{
                class:
                  ' opacity-100 transition duration-500 w-full h-full  object-cover overflow-hidden',

                'data-swiper-parallax': '100',
              }"
            ></nuxt-picture>
          </div>
        </div>
      </div>
    </div>
    <div class="px-[5%] mt-5 mx-auto lg:container">
      <div class="hidden md:flex justify-end mt-3">
          <span
            class="swiperGallery-prev cursor-pointer group relative overflow-hidden w-14 h-14 flex items-center justify-center rounded-full border border-solid border-gray-light/50 hover:border-white transition text-gray-main"
          >
            <span
              class="block absolute top-0 left-0 -translate-x-full duration-200 transition group-hover:translate-x-0 w-[120%] h-[120%] bg-white"
            >
            </span>
            <span
              class="flex group-hover:-translate-x-full transition duration-300"
            >
              <svg
                class="transform basis-full flex-shrink-0 rotate-180 invert-0 group-hover:invert invert-fix filter transition-[filter] duration-200"
                width="26"
                height="17"
                viewBox="0 0 26 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="8.5" x2="25" y2="8.5" stroke="white" />
                <line
                  x1="17.3536"
                  y1="0.646447"
                  x2="25.6267"
                  y2="8.9196"
                  stroke="white"
                />
                <line
                  x1="25.4854"
                  y1="8.35355"
                  x2="17.3537"
                  y2="16.4853"
                  stroke="white"
                />
              </svg>
              <svg
                class="transform basis-full flex-shrink-0 rotate-180 invert-0 group-hover:invert invert-fix filter transition-[filter,transform] duration-200"
                width="26"
                height="17"
                viewBox="0 0 26 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="8.5" x2="25" y2="8.5" stroke="white" />
                <line
                  x1="17.3536"
                  y1="0.646447"
                  x2="25.6267"
                  y2="8.9196"
                  stroke="white"
                />
                <line
                  x1="25.4854"
                  y1="8.35355"
                  x2="17.3537"
                  y2="16.4853"
                  stroke="white"
                />
              </svg>
            </span>
          </span>
          <span
            class="swiperGallery-next cursor-pointer ml-3 group relative overflow-hidden w-14 h-14 flex items-center justify-center rounded-full border border-solid border-gray-light/50 hover:border-white transition text-gray-main"
          >
            <span
              class="block absolute top-0 right-0 translate-x-full duration-200 transition group-hover:translate-x-0 w-[120%] h-[120%] bg-white"
            >
            </span>
            <span
              class="flex justify-end group-hover:translate-x-full transition duration-300"
            >
              <svg
                class="transform basis-full flex-shrink-0 invert-0 group-hover:invert invert-fix filter transition-[filter] duration-200"
                width="26"
                height="17"
                viewBox="0 0 26 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="8.5" x2="25" y2="8.5" stroke="white" />
                <line
                  x1="17.3536"
                  y1="0.646447"
                  x2="25.6267"
                  y2="8.9196"
                  stroke="white"
                />
                <line
                  x1="25.4854"
                  y1="8.35355"
                  x2="17.3537"
                  y2="16.4853"
                  stroke="white"
                />
              </svg>
              <svg
                class="transform basis-full flex-shrink-0 invert-0 group-hover:invert invert-fix filter transition-[filter,transform] duration-200"
                width="26"
                height="17"
                viewBox="0 0 26 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="8.5" x2="25" y2="8.5" stroke="white" />
                <line
                  x1="17.3536"
                  y1="0.646447"
                  x2="25.6267"
                  y2="8.9196"
                  stroke="white"
                />
                <line
                  x1="25.4854"
                  y1="8.35355"
                  x2="17.3537"
                  y2="16.4853"
                  stroke="white"
                />
              </svg>
            </span>
          </span>
        </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Parallax, Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    data: {
      type: Array,
    },
  },
  data() {
    return {
      swiper: null,
      swiperOptionsObject: {
        modules: [Parallax, Navigation, Autoplay],
        // spaceBetween: 20,
        slidesPerView: 'auto',
        // cssMode: true,
        centeredSlides: true,
        grabCursor: 'true',
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        parallax: true,
        speed: 1000,
        navigation: {
          nextEl: '.swiperGallery-next',
          prevEl: '.swiperGallery-prev',
        },
      },
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject)
  },
}
</script>

<style scoped>
.swiper-slide {
  transition-property: height !important;
  transition-duration: 500ms;
}
.swiper-slide:not(.swiper-slide-active) {
  @apply !h-4/5 opacity-75;
}
</style>
