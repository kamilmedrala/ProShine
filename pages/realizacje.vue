<template>
  <div>
    <Hero>
      <template :slot="'left'">
        <div class="px-[5%]">
          <Header :title="'Realizacje'" />
        </div>
      </template>
    </Hero>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Header from '../components/Header.vue'
export default {
  name: 'RealisationsPage',
  components: {
    Hero,
    Header,
  },
}
</script>

<style></style>
