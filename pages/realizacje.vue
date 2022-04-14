<template>
  <div>
      <Hero>
        <template :slot="'left'">
          <Header :title="'Realizacje'"/>
        </template>
      </Hero>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Header from "../components/Header.vue"
export default {
    name: "RealisationsPage",
    components: { 
      Hero,
      Header
     }
}
</script>

<style>

</style>
