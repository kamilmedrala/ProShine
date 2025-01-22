<template>
  <div ref="ctaContainer">
    <div
      class="relative w-full min-h-[240px] flex flex-col md:flex-row justify-between items-center md:items-start p-5 md:p-10 bg-gray-light rounded-md overflow-hidden">
      <div
        class="relative z-20 mb-5 [&_h3]:text-gray-dark [&_em]:not-italic [&_em]:font-serif [&_em]:text-4xl text-2xl md:text-3xl font-extralight"
        v-html="data && data.title
            ? data.title
            : '<h3><em>Masz pytania?</em> <br> Porozmawiaj z nami!</h3>'
          "></div>
      <UiButton :tel="ContactData.tel" class="mt-auto" />
      <div ref="image"
        class="absolute left-1 md:left-auto right-1 md:right-0 opacity-40 -bottom-20 top-[70px] md:top-14 md:w-2/3">
        <EffectAppear>
          <SvgFord />
        </EffectAppear>
      </div>
    </div>
  </div>
</template>


<script setup>

const props = defineProps({
  data: { type: Object },
})

const { data: ContactData } = await useAsyncData('ContactData', () =>
  $fetch('https://api.proshinedetailing.pl/wp-json/wp/v2/pages/332?acf_format=standard'),
  {
    transform(data) {
      return data.acf.contact_page_content
    }
  }
);

const imagePosition = useTemplateRef('image')
const ctaContainer = useTemplateRef('ctaContainer')


onMounted(() => {
  const parallaxOffset = 50
  const handleScroll = function () {
    if(!ctaContainer.value) return
    
    let offsetTopPage = ctaContainer.value.getBoundingClientRect().top
    imagePosition.value.style.transform = 'translateY(' + (-offsetTopPage + parallaxOffset / 2) * (parallaxOffset / this.window.innerHeight) + 'px)'
  }
  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>