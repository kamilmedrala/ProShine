<template>
  <div>
      <Hero>
        <template :slot="'left'">
          <Header :title="'Pro Shine'"/>
        </template>
        <template :slot="'right'">
          <div class=" absolute right-[5%] w-full md:w-[60vw] ">
            <swiper class="w-full ">
              <swiper-slide class="w-full">
                <div class="w-full aspect-video bg-black">

                </div>
              </swiper-slide>
            </swiper>
            <div class=" mt-3 flex justify-end">
              <span class="w-14 h-14 flex items-center justify-center rounded-full border border-solid border-gray-light/50 text-gray-main">-></span>
              <span class="ml-3 w-14 h-14 flex items-center justify-center rounded-full border border-solid border-gray-light/50 text-gray-main">-></span>
            </div>
          </div>
        </template>
      </Hero>
      <div class="h-[200vh]"></div>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Header from "../components/Header.vue"

export default {
    name: "Homepage",
    components: { 
      Hero,
      Header
    },
    scrollToTop: true
}
</script>

<style>

</style>
