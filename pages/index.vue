<template>
  <div>
    <SectionHero :data="pageData.section_banner">
      <SectionCounters :data="pageData.section_counters" />
    </SectionHero>
    
    <UiContainer class="mb-10 md:mb-20">
      <EffectAppear>
        <SectionBasic :data="pageData.section_about">
          <UiHeader title="O nas" />
          <template #right>
            <SvgCleanCar />
          </template>
        </SectionBasic>
      </EffectAppear>
    </UiContainer>
  
    <UiContainer class="mb-20 md:mb-[150px]">
      <EffectAppear>
        <UiHeader title="Oferta" class="mb-10" />
      </EffectAppear>
      <SectionOffer :data="offers" />
    </UiContainer>
  
    <UiContainer class="mb-20 md:mb-[150px]">
      <EffectAppear>
        <UiHeader title="Realizacje" class="mb-10 md:mb-16" />
      </EffectAppear>
      <template #fullwidth>
        <SectionGallerySwiper class="mb-5 md:mb-10" :data="pageData.photo_gallery['section_homepage_gallery'][1]" />
        <EffectAppear>
          <UiButton :url="'/galeria'" :text="'Zobacz galerię'" :center="true" />
        </EffectAppear>
      </template>
    </UiContainer>
  
    <UiContainer class="mb-10 md:mb-[120px]">
      <EffectAppear>
        <SectionBasic :data="pageData.section_compare1">
          <template #left>
            <UiImage v-if="pageData.section_compare1.image_left || pageData.section_compare1.image_right"
              :class="'shrink-0'" :data="pageData.section_compare1" />
          </template>
        </SectionBasic>
      </EffectAppear>
    </UiContainer>
  
    <UiContainer class="mb-10 md:mb-[120px]">
      <SectionCta class="mb-20 md:mb-[150px]" />
    </UiContainer>
  
    <UiContainer class="mb-20 md:mb-[150px]">
      <EffectAppear>
        <UiHeader title="Opinie" class="mb-10 md:mb-16" />
      </EffectAppear>
      <template #fullwidth>
        <SectionTestimonials :data="reviews" />
      </template>
    </UiContainer>
  
    <UiContainer class="mb-10 md:mb-[120px]">
      <EffectAppear>
        <SectionBasic :data="pageData.section_compare2">
          <template #right>
            <UiImage v-if="pageData.section_compare2.image_left || pageData.section_compare2.image_right"
              :class="'shrink-0'" :data="pageData.section_compare2" />
          </template>
        </SectionBasic>
      </EffectAppear>
    </UiContainer>
  </div>

</template>

<script setup>

const { data: pageData, pending, error } = await useAsyncData('homepageData', () =>
  $fetch('https://api.proshinedetailing.pl/wp-json/wp/v2/pages/2?acf_format=standard'), {
  transform(data) {
    return data.acf
  }
}
);

const offers = computed(() => {
  return [
    pageData.value?.oferta1,
    pageData.value?.oferta2,
    pageData.value?.oferta3,
    pageData.value?.oferta4,
    pageData.value?.oferta5,
  ];
});

const reviews = computed(() => {
  return [
    pageData.value?.review1,
    pageData.value?.review2,
    pageData.value?.review3,
    pageData.value?.review4,
    pageData.value?.review5,
    pageData.value?.review6,
  ];
});
</script>