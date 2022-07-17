<template>
  <div
    class="flex flex-col-reverse md:flex-row justify-between px-[5%] transition duration-200 mb-40"
    :class="{ 'ml-[30%]': !data.section_image }"
  >
    <div
      v-if="data.section_image"
      class="w-full md:max-w-lg md:pr-10 fade-left transition duration-200"
    >
      <div class="will-change-transform overflow-hidden rounded-md" ref="image">
        <nuxt-picture
          :src="data.section_image.url"
          :title="
            data.section_image.title
              ? data.section_image.title
              : 'section side image'
          "
          :alt="
            data.section_image.alt
              ? data.section_image.alt
              : 'section side image'
          "
          :imgAttrs="{
            class:
              'loading object-cover w-full max-h-[400px] transition duration-500 hover:scale-105',
          }"
          @load="removeLoadingStyle($event)"
        ></nuxt-picture>
      </div>
    </div>
    <div
      class="overflow-hidden"
      :class="{ 'md:basis-[66%] shrink-0': data.section_image }"
    >
      <div class="fade-right transition duration-200">
        <h2
          v-if="data.section_title"
          class="mb-5 pl-5 italic"
          v-html="data.section_title"
        ></h2>
        <div
          v-if="data.section_content"
          class="mb-10"
          v-html="data.section_content"
        ></div>
        <div
          v-if="data.section_logos"
          class="flex justify-center gap-5 md:gap-12 flex-wrap items-center mb-10"
        >
          <div
            class="basis-24 md:basis-48 h-32"
            v-for="(item, index) in data.section_logos"
            :key="index"
          >
            <nuxt-picture
              v-if="item.url"
              class="h-full block"
              :src="item.url"
              :title="item.title ? item.title : 'logo'"
              :alt="item.alt ? item.alt : 'logo'"
              :imgAttrs="{
                class:
                  'w-full h-full object-contain filter saturate-0 hover:scale-[102%] hover:saturate-100 transition duration-200',
              }"
            ></nuxt-picture>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionBasic',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    let imagePosition = this.$refs.image

    window.addEventListener('scroll', function () {
      let offsetY = 0
      if (window.innerWidth < 768) {
        offsetY = 0
      } else {
        offsetY = window.scrollY
      }
      imagePosition.style.transform = 'translateY(' + offsetY * 0.15 + 'px)'
    })
    console.log(imagePosition)
  },
  methods: {
    removeLoadingStyle(event) {
      event.target.classList.remove('loading')
    },
  },
}
</script>

<style></style>
