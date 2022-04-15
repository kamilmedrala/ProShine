<template>
  <div>
      <Hero>
        <template :slot="'left'">
          <Header :title="'Pro Shine'"/>
        </template>
        <template :slot="'right'">
          <div ref="parallaxSwiper" class=" absolute right-[5%] w-full md:w-[60vw] ">
            <client-only>
              <swiper class="w-full ">
                <swiper-slide v-for="(item,index) in bannerData" :key="index" class="w-full">
                  <div class="w-full aspect-video ">
                    <nuxt-picture :imgAttrs="{class:'w-full h-full object-cover'}" :src="item.url"></nuxt-picture>
                  </div>
                </swiper-slide>
              </swiper>
            </client-only>
            <div class=" mt-3 flex justify-end">
              <span class="w-14 h-14 flex items-center justify-center rounded-full border border-solid border-gray-light/50 text-gray-main"></span>
              <span class="ml-3 w-14 h-14 flex items-center justify-center rounded-full border border-solid border-gray-light/50 text-gray-main"></span>
            </div>
          </div>
        </template>
      </Hero>
      <div class="h-[200vh]">
      </div>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue"
import Header from "../components/Header.vue"

export default {
    name: "Homepage",
    components: { 
      Hero,
      Header
    },
    data(){
      return {
        bannerData:this.$store.state.homepage.banner
      } 
    },
    mounted(){
        
      let swiperPosition = this.$refs.parallaxSwiper;

      window.addEventListener('scroll',function () {
        swiperPosition.style.transform = 'translateY('+ (window.scrollY)*0.2 + 'px)'
      })
      
    }
}
</script>

<style>

</style>
