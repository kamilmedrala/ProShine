<template>
  <div>
    <div class=" relative pt-20 px-[5%] mx-auto lg:container overflow-hidden">
      <HeaderSection
        class="fade-left transition duration-200"
        :title="'Galeria'"
        :h1="true"
      />
    </div>
    <div class="px-[5%] mx-auto lg:container mb-20 md:mb-[150px]">
      <TilesGallery :data="pageData.photo_gallery.gallery_page_content[0]" />
    </div>
    <Appear class="mb-20 md:mb-[150px]">
      <SectionCta />
    </Appear>
  </div>
</template>

<script>
import HeaderSection from '../components/HeaderSection.vue'
import Appear from '../components/Appear.vue'
import TilesGallery from '../components/TilesGallery.vue'

export default {
  async asyncData({$axios,store}) {
    await $axios
      .$get(
        'https://api.kamilmedrala.thecamels.eu/wp-json/wp/v2/pages/214?acf_format=standard'
      )
      .then((response) => {
        store.commit('setAcfData', { response: response.acf, location: 'galleryPage' })
      })
  },
  name: 'GalleryPage',
  components: {
    HeaderSection,
    Appear,
    TilesGallery,
  },
  data() {
    return {
      pageData: this.$store.getters.gallerypageData,
    }
  },
}
</script>