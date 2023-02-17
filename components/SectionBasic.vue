<template>
  <div
    class="flex flex-col-reverse md:flex-row justify-between items-center transition duration-200"
  >
    <slot name="left"></slot>
    <div :class="['fade-right transition duration-200',{'md:pl-10 ':$slots.left}, {'md:pr-10 order-1 md:order-none ':$slots.right}]">
      <div
        v-if="data.section_content"
        class="section-content mb-5 md:mb-10"
        v-html="data.section_content"
      ></div>
      <!-- <ul
        v-if="data.section_logos"
        class="flex justify-center flex-wrap items-center w-full mb-10"
      >
        <li v-for="image in data.section_logos" :key="image.id"
        class="w-32 md:w-1/3 lg:w-1/5 h-24 md:h-32 py-2.5 px-2.5 md:px-5 object-contain filter saturate-0 hover:saturate-100 transition duration-200">
          <nuxt-picture class="w-full h-full" :imgAttrs="{class: 'w-full h-full object-contain'}" v-if="image.full_image_url" :src="image.full_image_url"/>
        </li>
      </ul> -->
    </div>
    <slot name="right"></slot>

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
}
</script>

<style lang="postcss" scoped>
.section-logos >>> p {
  @apply flex justify-center flex-wrap items-center w-full mb-10;
}

.section-content >>> li {
  @apply text-white text-base md:text-xl font-extralight text-justify tracking-wide;
}

.section-content >>> h2 {
  @apply mb-5 pl-5 md:pl-10 italic text-gold
}

.section-content >>> ul {
    @apply pl-5 md:pl-7 list-disc
  }

.section-content >>> ol {
    @apply pl-5 list-decimal
  }

.section-content >>> li {
    @apply mb-5
  }

.section-content >>> table {
  @apply text-white border-0
}

</style>
