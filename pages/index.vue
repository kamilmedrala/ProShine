<template>
  <div>
    <div class="md:h-screen 2xl:max-h-[800px] mb-32">
      <Hero :data="pageData.images_banner" />
    </div>
    <Appear>
      <SectionBasic :data="pageData.section_about" />
    </Appear>
    <Appear>
      <OfferTiles />
    </Appear>
    <div
      class="px-[5%] flex justify-center items-center gap-5 flex-wrap md:flex-nowrap"
    >
      <!-- <Appear v-for="(i, index) in 3" :key="index">
        <div
          class="basis-full md:basis-1/3 bg-gray-main h-[500px] rounded-md transition hover:bg-gray-dark min-w-[250px]"
        ></div>
      </Appear> -->
    </div>
    <div class="px-[5%] w-full h-screen"></div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Appear from '../components/Appear.vue'
import OfferTiles from '../components/OfferTiles.vue'

export default {
  name: 'Homepage',
  components: {
    Hero,
    Appear,
    OfferTiles,
  },
  data() {
    return {
      pageData: this.$store.getters.homepageData,
    }
  },
}
</script>

<style></style>
