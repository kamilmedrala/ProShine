<template>
  <div class="px-[5%]">
    <HeaderSection :title="'Oferta'" />
    <div class="flex flex-wrap md:flex-nowrap">
      <div class="w-full p-5 md:mr-10 mb-5 rounded-md bg-[#262625]"></div>
      <div class="w-full p-5 md:mr-10 mb-5 rounded-md bg-[#262625]"></div>
      <div class="w-full p-5 mb-5 rounded-md bg-[#262625]"></div>
    </div>
  </div>
</template>

<script>
import HeaderSection from './HeaderSection.vue'
export default {
  name: 'OfferTiles',
  components: {
    HeaderSection,
  },
}
</script>

<style></style>
