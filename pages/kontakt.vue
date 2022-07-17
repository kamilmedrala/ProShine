<template>
  <div>
    <Hero>
      <template :slot="'left'">
        <div class="px-[5%]">
          <HeaderSection :title="'Kontakt'" />
        </div>
      </template>
    </Hero>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import HeaderSection from '../components/HeaderSection.vue'
export default {
  name: 'ContactPage',
  components: {
    Hero,
    HeaderSection,
  },
}
</script>

<style></style>
