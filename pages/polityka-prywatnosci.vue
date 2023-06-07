<template>
  <div>
    <div class="pt-20 px-[5%] mx-auto lg:container overflow-hidden">
      <HeaderSection
        class="fade-left transition duration-200"
        :title="'Polityka Prywatności'"
        :h1="true"
      />
    </div>
    <SectionBasic class=" relative z-10 mb-20 md:mb-[150px] px-[5%] mx-auto lg:container" :data="{section_content: pageData.policy_page_content}" />
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
        'https://api.proshinedetailing.pl/wp-json/wp/v2/pages/3?acf_format=standard'
      )
      .then((response) => {
        store.commit('setAcfData', { response: response.acf, location: 'policyPage' })
      })
  },
  name: 'PolicyPage',
  components: {
    HeaderSection,
    SectionBasic,
  },
  head(){
    return {
      title: "PRO SHINE - Polityka prywatności"
    }
  },
  data() {
    return {
      pageData: this.$store.getters.policypageData,
    }
  },

}
</script>

<style>
</style>
