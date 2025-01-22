<template>
  <div>
    <UiContainer class="pt-24">
      <UiHeader
        class="!text-gold [&_h1]:!font-serif mb-10"
        :title="'Polityka Prywatności'"
        :h1="true"
      />
    </UiContainer>
    <UiContainer class="mb-20 md:mb-[150px]">
      <SectionBasic :data="{section_content: pageData.policy_page_content}" />
    </UiContainer>
    <UiContainer class="mb-10 md:mb-[120px]">
      <SectionCta />
    </UiContainer>
  </div>
</template>



<script setup>
const { data: pageData } = await useAsyncData(
  'policyPageData',
  () =>
    $fetch('https://api.proshinedetailing.pl/wp-json/wp/v2/pages/3?acf_format=standard'),
    {transform(data) {
      return data.acf
    }}
);

useSeoMeta({
  title: 'PRO SHINE - Polityka Prywatności',
});

</script>