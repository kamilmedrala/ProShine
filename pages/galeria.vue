<template>
  <div>
    <UiContainer class="pt-24">
      <UiHeader
        class="!text-gold [&_h1]:!font-serif mb-10"
        :title="'Galeria'"
        :h1="true"
      />
    </UiContainer>
    <UiContainer class="mb-20 md:mb-[150px]">
      <SectionGalleryGrid :data="pageData" />
    </UiContainer>
    <UiContainer class="mb-10 md:mb-[120px]">
      <SectionCta />
    </UiContainer>
  </div>
</template>

<script setup>

const { data: pageData } = await useAsyncData(
  'galleryPageData',
  () =>
    $fetch('https://api.proshinedetailing.pl/wp-json/wp/v2/pages/214?acf_format=standard'),
    {
    transform(data) {
      return data.acf.photo_gallery.gallery_page_content[0]
    }
  }
);

useSeoMeta({
  title: 'PRO SHINE - Galeria',
});

</script>