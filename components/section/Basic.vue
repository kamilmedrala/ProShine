<template>
  <div
    class="flex flex-col md:flex-row justify-between items-center gap-10"
  >
    <slot name="left"></slot>
    <div class="section-content transition duration-200 flex-1">
      <slot></slot>
      <div
        v-if="data.section_content"
        class="mb-5 md:mb-10"
        v-html="data.section_content"
      ></div>
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
.section-logos :deep(p) {
  @apply flex justify-center flex-wrap items-center w-full mb-10;
}

.section-content :deep(li) {
  @apply text-black text-base md:text-xl font-extralight text-justify tracking-wide;
}

.section-content :deep(h2) {
  @apply mb-5 text-gold font-serif
}

.section-content :deep(ul) {
    @apply pl-5 md:pl-7 list-disc
  }

.section-content :deep(ol) {
    @apply pl-5 list-decimal
  }

.section-content :deep(li) {
    @apply mb-5
  }

.section-content :deep(table) {
  @apply text-black border-0
}

</style>
