<template>
  <div class="w-full overflow-hidden">
    <div
      ref="swiper"
      class="swiper swiper-container mx-auto lg:container !px-[5%] !overflow-visible"
    >
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in reviewsArray"
          :key="index"
          class="swiper-slide basis-4/5 md:basis-1/2 lg:basis-auto"
        >
          <div class="relative w-full pl-0 p-5 mr-5 lg:mr-0 overflow-hidden">
            <span class="absolute z-10 right-12 md:right-5 -top-20 text-[180px] text-gray-main opacity-60 select-none"
            data-swiper-parallax="40">“</span>
            <div class="relative z-10">
              <div class=" flex justify-between mb-3">
                <p class="text-2xl md:text-3xl">
                  {{item.author}}
                </p>
                <span class="text-gold text-2xl font-light italic mr-14">5<span class="text-lg text-white/80"> / 5</span></span>
              </div>
              <p class="font-extralight italic mb-5 text-left">
                  "{{item.description}}"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination pt-5 lg:hidden"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, Autoplay, Grid, Pagination, Parallax } from 'swiper'
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
        modules: [Autoplay, Grid, Pagination, Parallax],
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 1000,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          dynamicBullets: true,
        },
        breakpoints: {
          1024:{
            loop:false,
            pagination: false,
            auto: false,
            parallax: false,
            spaceBetween: 40,
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerColumn: 2,
            grid: {
              rows: 2,
              fill: 'row'
            },  
          }
        }
      },
    }
  },
  computed:{
    reviewsArray(){
      let reviews = []
      for(let i=0; i < this.data.length; i++){
        let review = this.data[i]
        if(review.author.length && review.description.length){
          reviews.push(review)
        }
      }

      return reviews
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject)
  },
}
</script>

<style>
.swiper .swiper-pagination-bullet{
  @apply !w-10 !h-[3px] !rounded-none !bg-gray-main !opacity-100 !transition-all duration-300
}
.swiper .swiper-pagination-bullet.swiper-pagination-bullet-active{
  @apply !bg-gold
}
</style>