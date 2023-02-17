<template>
  <div>
    <div class="pt-20 px-[5%] mx-auto lg:container overflow-hidden">
      <HeaderSection
        class="fade-left transition duration-200"
        :title="'Oferta'"
        :h1="true"
      />
    </div>
    <SectionBasic class=" relative z-10 mb-20 md:mb-[150px] px-[5%] mx-auto lg:container" :data="{section_content: pageData.offer_page_content}" />
    <Appear class="mb-20 md:mb-[150px]">
      <SectionCta />
    </Appear>
  </div>
</template>

<script>
import HeaderSection from '../components/HeaderSection.vue'
import SectionBasic from '../components/SectionBasic.vue'

export default {
  async asyncData({$axios,store}) {
    await $axios
      .$get(
        'https://api.kamilmedrala.thecamels.eu/wp-json/wp/v2/pages/43?acf_format=standard'
      )
      .then((response) => {
        store.commit('setAcfData', { response: response.acf, location: 'offerPage' })
      })
  },
  name: 'OfferPage',
  components: {
    HeaderSection,
    SectionBasic,
  },
  data() {
    return {
      pageData: this.$store.getters.offerpageData,
    }
  },

}
</script>

<style>
</style>
