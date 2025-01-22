<template>
  <div class="w-full overflow-hidden md:container">
    <ClientOnly>
      <swiper-container
        class="swiper-container"
        :slides-per-view="'auto'"
        :loop="true"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :speed="1000"
        :parallax="true"
        pagination="true"
        :breakpoints="{
          1024: {
            loop: false,
            pagination: false,
            auto: false,
            parallax: false,
            spaceBetween: 40,
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerColumn: 2,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },
        }"
      >
        <swiper-slide
          v-for="(item, index) in reviewsArray"
          :key="index"
          class="basis-4/5 md:basis-1/2 lg:basis-auto"
        >
          <SectionTestimonialsTile :data="item" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<script setup>

const props = defineProps({
  data: {
    type: Array,
  },
})

const reviewsArray = computed(() => {
  return props.data.filter(
    (review) => review.author.length && review.description.length
  )
})
</script>

<style>
.swiper-container::part(pagination){
  @apply lg:hidden mt-5
} 
.swiper-container::part(bullet) {
  @apply !w-8 !h-[3px] !rounded-none !bg-gray-main !opacity-40 !transition-all !duration-300;
}
.swiper-container::part(bullet-active) {
  @apply !w-10 !h-1 !rounded-none !bg-gold !transition-all !duration-300;
}
.swiper-container::part(wrapper){
  @apply !overflow-visible px-5 md:px-0;
}
</style>