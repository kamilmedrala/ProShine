<template>
  <ul class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mb-20">
    <SectionOfferTile v-for="(offer, index) in data" :key="index" :data="offer" />
  </ul>
  <UiButton :url="'/galeria'" text="Dowiedz się więcej" :center="true" />
</template>

<script setup>

const props = defineProps({
  data: Array
});
</script>

<style>

</style>
