<template>
  <div>
      <Hero>
        <template :slot="'left'">
          <Header :title="'Kontakt'"/>
        </template>
      </Hero>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Header from "../components/Header.vue"
export default {
    name: "ContactPage",
    components: { 
      Hero,
      Header
     }
}
</script>

<style>

</style>
