<template>
  <div class="px-2.5 lg:px-5 relative my-[75px] md:my-20">
    <div class="h-[550px] container relative mx-auto">
      <div class="z-10 relative pt-44 max-w-[600px]">
        <EffectAppear>
          <UiHeader :title="data.text" :h1="true" class="mb-10" />
        </EffectAppear>
        <EffectAppear :delay="300">
          <UiButton :text="'Poznaj ofertę'" :url="'/oferta'" :appear="true" />
        </EffectAppear>
      </div>
      <div class="absolute inset-0 rounded-xl overflow-hidden">
        <div ref="parallaxBanner" class="size-full">
          <NuxtPicture :src="data.image.url"
          class="size-full"
          alt="Pro Shine baner"
          loading="eager"
          :img-attrs="{class:'brightness-50 md:brightness-75 size-full object-cover'}" />
        </div>
      </div>
    </div>
    <div class="px-0 xl:px-5 xl:absolute xl:left-0 lg:right-0 mt-5 bottom-5">
      <div class="px-0 xl:px-5 container xl:flex justify-end">
        <div class="rounded-xl backdrop-blur-md bg-gray-light lg:bg-gray-main/20 xl:w-1/2 ">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  data: {
    type: Object,
  },
})

const parallaxBanner = ref(null)

onMounted(() => {
  let swiperPosition = parallaxBanner.value
  window.addEventListener("scroll", function () {
    swiperPosition.style.transform =
      "translateY(" + window.scrollY * 0.25 + "px)"
  })
})

</script>