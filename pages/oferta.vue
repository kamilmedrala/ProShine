<template>
  <div>
    <UiContainer class="pt-24">
      <UiHeader
        class="!text-gold [&_h1]:!font-serif mb-10"
        :title="'Oferta'"
        :h1="true"
      />
      <SectionBasic class=" relative z-10 mb-20" :data="{section_content: pageData.offer_page_content}" />
    </UiContainer>
    <UiContainer class="mb-10 md:mb-[120px]">
      <SectionCta/>
    </UiContainer>
  </div>
</template>

<script setup>

const { data: pageData } = await useAsyncData(
  'offerPageData',
  () =>
    $fetch('https://api.proshinedetailing.pl/wp-json/wp/v2/pages/43?acf_format=standard'),
    {
    transform(data) {
      return data.acf
    }
  }

);

useSeoMeta({
  title: 'PRO SHINE - Oferta',
});

</script>