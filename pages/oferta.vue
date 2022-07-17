<template>
  <div>
    <Hero>
      <template :slot="'left'">
        <div class="px-[5%]">
          <HeaderSection :title="'Oferta'" />
        </div>
      </template>
    </Hero>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import HeaderSection from '../components/HeaderSection.vue'
export default {
  name: 'OfferPage',
  components: {
    Hero,
    HeaderSection,
  },
}
</script>

<style></style>
