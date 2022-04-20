<template>
  <div>
      <Hero>
        <template :slot="'left'">
          <Header :title="'Pro Shine'"/>
        </template>
        <template :slot="'right'">
          <div ref="parallaxBanner" class="relative right-[-5%] md:absolute md:right-[5%] w-full h-full md:w-[60vw] mb-6 md:mb-0">
            <div class="flex flex-col justify-center h-full">
              <client-only>
                <swiper class="swiper h-[400px] md:h-auto md:aspect-video w-full rounded-md" 
                  :options="{
                    spaceBetween:20,
                    grabCursor:'true',
                    autoplay: {
                      delay: 7000,
                    },
                    speed: 500
                  }"
                >
                  <swiper-slide v-for="(item,index) in bannerData" :key="index" class="w-full">
                    <div class="w-full h-full relative z-30">
                      <nuxt-picture preload class="block w-full h-full" :imgAttrs="{class:'loading opacity-100 transition duration-500 w-full h-full rounded-md object-cover overflow-hidden',loading:'eager'}"  :src="item.url" @load="removeLoadingStyle($event)"></nuxt-picture>
                      <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-gray-dark via-transparent to-transparent opacity-0 transition duration-300"></div>
                    </div>
                  </swiper-slide>
                </swiper>
              <div class=" mt-3 flex justify-end">
                <span class="w-14 h-14 flex items-center justify-center rounded-full border border-solid border-gray-light/50 text-gray-main"></span>
                <span class="ml-3 w-14 h-14 flex items-center justify-center rounded-full border border-solid border-gray-light/50 text-gray-main"></span>
              </div>
              </client-only>
            </div>
          </div>
        </template>
      </Hero>
      <div class="h-[200vh] fade-left transition duration-200 pt-32">
        <div>
          <h2 class="mb-5 pl-5 italic">O nas</h2>
          <p class="">Oferujemy profesjonalną usługę kompleksowego czyszczenia, renowacji i konserwacji pojazdu samochodowego lub jego elementów, zarówno na zewnątrz jak i wewnątrz, w celu podniesienia walorów estetycznych i użytkowych pojazdu, a także przedłużenia jego żywotności. Korzystamy wyłącznie z produktów najlepszej jakości. <a href="tel:">Zadzwoń już teraz</a> i dołącz do grona naszych zadowolonych klientów!</p>
        </div>
        <div class="w-full flex justify-end mt-[200px]">
          <div>
            <Header :title="'Oferta'"/>
          </div>
        </div>
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
      Header,
    },
    data(){
      return {
        bannerData:this.$store.state.homepage.banner
      } 
    },
    mounted(){
        
      let swiperPosition = this.$refs.parallaxBanner;

      window.addEventListener('scroll',function () {
        swiperPosition.style.transform = 'translateY('+ (window.scrollY)*0.15 + 'px)'
      })
      
    },
    methods:{
      removeLoadingStyle(event){
        event.target.classList.remove('loading');
        event.target.parentNode.nextElementSibling.style.opacity = '90%';
      }
    }
}
</script>

<style>

</style>
