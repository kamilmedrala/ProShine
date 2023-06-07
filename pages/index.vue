<template>
  <div>
    <div
      class="mx-auto lg:container md:h-screen 2xl:max-h-[800px] mb-24 lg:mb-[150px]"
    >
      <Hero :data="pageData.section_banner" />
    </div>
    <Appear class="mb-10 md:mb-20">
      <SectionBasic
        class="px-[5%] mx-auto lg:container"
        :data="{
          ...pageData.section_about,
          section_logos: pageData.photo_gallery['section_homepage_gallery'][0],
        }"
      />
    </Appear>
    <Appear class="mb-20 md:mb-[150px]">
      <Counters :data="pageData.section_counters" />
    </Appear>
    <div class="mb-20 md:mb-[150px] px-[5%] mx-auto lg:container relative z-10">
      <Appear>
        <HeaderSection title="Oferta" class="mb-10 md:mb-16" />
      </Appear>
      <SectionOffer
        :data="offers"
      />
      <Appear>
        <div class="flex justify-center mt-14">
          <nuxt-link
            to="/oferta"
            class="block relative z-20 px-10 py-2.5 bg-gold hover:bg-gold/70 text-gray-main text-lg md:text-xl italic transition duration-200"
          >
            Dowiedz się więcej
          </nuxt-link>
        </div>
      </Appear>
    </div>
    <div class="relative mb-20 md:mb-[150px]">
      <div
        class="absolute w-2/3 top-8 md:top-14 bottom-10 md:bottom-20 left-0 bg-gray-main"
      ></div>
      <div class="px-[5%] mx-auto lg:container">
        <Appear>
          <HeaderSection title="Realizacje" class="mb-10 md:mb-16" />
        </Appear>
      </div>
      <Appear>
        <SwiperGallery
          class="mb-5 md:mb-10"
          :data="pageData.photo_gallery['section_homepage_gallery'][1]"
        />
      </Appear>
      <Appear>
        <StyledButton
          :url="'/galeria'"
          :text="'Zobacz galerię'"
          :center="true"
        />
      </Appear>
    </div>
    <Appear>
      <SectionBasic
        class="mb-10 md:mb-[120px] px-[5%] mx-auto lg:container"
        :data="pageData.section_compare1"
      >
        <template #left>
          <ImageBlock v-if="pageData.section_compare1.image_left || pageData.section_compare1.image_right" :class="'shrink-0'" :data="pageData.section_compare1" />
        </template>
      </SectionBasic>
    </Appear>
    <Appear>
      <SectionCta class="mb-20 md:mb-[150px]" />
    </Appear>
    <div v-if="reviews.length" class="mb-20 md:mb-[150px]">
      <div class="px-[5%] mx-auto lg:container">
        <Appear>
          <HeaderSection title="Opinie" class="mb-10 md:mb-16" />
        </Appear>
      </div>
      <SectionOpinions :data="reviews" />
    </div>
    <Appear>
      <SectionBasic
        class="mb-10 md:mb-[120px] px-[5%] mx-auto lg:container"
        :data="pageData.section_compare2"
      >
        <template #right>
          <ImageBlock v-if="pageData.section_compare2.image_left || pageData.section_compare2.image_right" :class="'shrink-0'" :data="pageData.section_compare2" />
        </template>
      </SectionBasic>
    </Appear>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Appear from '../components/Appear.vue'
import HeaderSection from '../components/HeaderSection.vue'
import OfferTile from '../components/OfferTile.vue'
import SectionCta from '../components/SectionCta.vue'
import SwiperGallery from '../components/SwiperGallery.vue'
import ImageBlock from '../components/ImageBlock.vue'
import StyledButton from '../components/StyledButton.vue'
import Counters from '../components/Counters.vue'
import SectionOffer from '../components/SectionOffer.vue'
import SectionOpinions from '../components/SectionOpinions.vue'

export default {
  name: 'Homepage',
  components: {
    Hero,
    Appear,
    OfferTile,
    SectionCta,
    HeaderSection,
    SwiperGallery,
    ImageBlock,
    StyledButton,
    Counters,
    SectionOffer,
    SectionOpinions,
  },
  head(){
    return {
      title: "PRO SHINE - profesjonalne usługi detailingowe pojazdów",
    }
  },
  data() {
    return {
      pageData: this.$store.getters.homepageData,
    }
  },
  computed: {
    offers(){
      return[
            this.pageData.oferta1,
            this.pageData.oferta2,
            this.pageData.oferta3,
            this.pageData.oferta4,
          ]},

      reviews(){
        return [
          this.pageData.review1,
          this.pageData.review2,
          this.pageData.review3,
          this.pageData.review4,
          this.pageData.review5,
          this.pageData.review6,
        ]}
  }
}
</script>
