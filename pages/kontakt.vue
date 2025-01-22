<template>
  <div>
    <UiContainer class="pt-24">
      <UiHeader class="!text-gold [&_h1]:!font-serif mb-10" :title="'Kontakt'" :h1="true" />
    </UiContainer>
    <UiContainer>
      <div class="flex flex-col md:flex-row mb-20">
        <FeatureContact :fontDark="true" class="w-full md:w-1/2 md:mt-20 mb-10 md:mb-0" />
        <FeatureMap class="w-full md:w-1/2" />
      </div>
    </UiContainer>
  </div>
</template>

<script setup>

useSeoMeta({
  title: 'PRO SHINE - Kontakt',
});

</script>