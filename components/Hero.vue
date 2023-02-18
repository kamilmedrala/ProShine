<template>
  <div
    class="w-full flex flex-col-reverse md:items-center md:flex-row h-full pt-20 md:pt-24"
  >
    <div
      class="fade-left transition duration-200 flex items-center shrink-0 relative pointer-events-none basis-1/2 h-full z-40"
    >
      <div class="pl-[5vw]">
        <HeaderSection :title="'Pro Shine'" :h1="true" />
        <StyledButton :text="'Poznaj ofertę'" :url="'/oferta'" :appear="true" class="ml-5 md:ml-10"/>
      </div>
    </div>
    <div
      class="flex items-center justify-center flex-grow-0 relative basis-1/2 h-full"
    >
      <div
        ref="parallaxBanner"
        class="relative pl-[15%] md:pl-0 md:absolute md:right-[2.5vw] w-full h-full overflow-hidden md:w-[62vw] mb-6 md:mb-0 will-change-transform"
      >
      <KeepAlive>
        <div
          class="fade-right transition duration-200 flex flex-col justify-center h-full"
        >
          <div
            ref="swiper"
            class="swiper swiper-container h-[400px] md:h-auto md:aspect-video w-full rounded-l-md md:rounded-md overflow-hidden"
          >
            <div class="swiper-wrapper">
              <div
                v-for="(item, index) in data"
                :key="index"
                class="swiper-slide w-full h-full first:rounded-l-md overflow-hidden"
              >
                <div class="w-full h-full relative z-30">
                  <nuxt-picture
                    v-if="item.url"
                    preload
                    class="block w-full h-full md:rounded-md overflow-hidden"
                    :src="item.url"
                    :title="item.title ? item.title : 'banner image'"
                    :alt="item.alt ? item.alt : 'banner image'"
                    height="600"
                    width="800"
                    :imgAttrs="{
                      class:
                        'loading opacity-100 transition duration-500 w-full h-full  object-cover overflow-hidden',
                      loading: 'eager',

                      'data-swiper-parallax': '150',
                    }"
                    @load="removeLoadingStyle($event)"
                  ></nuxt-picture>
                  <div
                    class="hidden md:block w-full h-full absolute top-0 -left-[1px] z-40 bg-gradient-to-r from-gray-dark via-transparent to-transparent opacity-0 transition duration-300"
                  ></div>
                  <span
                    v-if="item.title"
                    class="z-50 italic text-gold text-2xl md:text-3xl font-extralight relative bottom-14 left-10"
                    data-swiper-parallax="600"
                  >
                    {{ item.title }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden md:flex justify-end mt-3">
            <span
              class="swiper-prev group relative overflow-hidden w-14 h-14 flex items-center justify-center rounded-full border border-solid border-gray-light/50 hover:border-white transition text-gray-main"
            >
              <span
                class="block absolute top-0 left-0 -translate-x-full duration-200 transition group-hover:translate-x-0 w-[120%] h-[120%] bg-white"
              >
              </span>
              <span
                class="flex group-hover:-translate-x-full transition duration-300"
              >
                <svg
                  class="transform basis-full flex-shrink-0 rotate-180 group-hover:invert filter transition-[filter] duration-200"
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
                  class="transform basis-full flex-shrink-0 rotate-180 group-hover:invert filter transition-[filter,transform] duration-200"
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
              class="swiper-next ml-3 group relative overflow-hidden w-14 h-14 flex items-center justify-center rounded-full border border-solid border-gray-light/50 hover:border-white transition text-gray-main"
            >
              <span
                class="block absolute top-0 right-0 translate-x-full duration-200 transition group-hover:translate-x-0 w-[120%] h-[120%] bg-white"
              >
              </span>
              <span
                class="flex justify-end group-hover:translate-x-full transition duration-300"
              >
                <svg
                  class="transform basis-full flex-shrink-0 group-hover:invert filter transition-[filter] duration-200"
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
                  class="transform basis-full flex-shrink-0 group-hover:invert filter transition-[filter,transform] duration-200"
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
      </KeepAlive>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Parallax, Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import StyledButton from './StyledButton.vue'

export default {
    name: "Hero",
    props: {
        data: {
            type: Object,
        },
    },
    data() {
        return {
            swiper: null,
            swiperOptionsObject: {
                modules: [Parallax, Navigation, Autoplay],
                spaceBetween: 20,
                grabCursor: "true",
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                parallax: true,
                speed: 900,
                navigation: {
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                },
            },
        };
    },
    mounted() {
        this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject);
        let swiperPosition = this.$refs.parallaxBanner;
        window.addEventListener("scroll", function () {
            swiperPosition.style.transform =
                "translateY(" + window.scrollY * 0.15 + "px)";
        });
    },
    methods: {
        removeLoadingStyle(event) {
            event.target.classList.remove("loading");
            event.target.parentNode.nextElementSibling.style.opacity = "90%";
        },
    },
    components: { StyledButton }
}
</script>