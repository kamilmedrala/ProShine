<template>
  <div>
    <div class="pt-20 px-[5%] mx-auto lg:container overflow-hidden">
      <HeaderSection
        class="fade-left transition duration-200"
        :title="'Kontakt'"
        :h1="true"
      />
      <div class="flex flex-col md:flex-row mb-20">
        <ContactData class="fade-left w-full md:w-1/2 md:mt-20 mb-10 md:mb-0" />
        <div class="fade-right w-full md:w-1/2">
          <div class="w-full h-[500px] opacity-80 grayscale-[15%]">
            <div class="w-full h-full">
              <iframe
                class="w-full"
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=ProShine%20skrzyszow&t=&z=14&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import HeaderSection from '../components/HeaderSection.vue'
import ContactData from '../components/ContactData.vue'

export default {
  name: 'ContactPage',
  components: {
    Hero,
    HeaderSection,
    ContactData,
  },
  head(){
    return {
      title: "PRO SHINE - Kontakt",
    }
  },

}
</script>

<style>
</style>
