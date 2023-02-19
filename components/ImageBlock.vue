<template>
  <div
    v-if="data.image_left && data.image_right"
    ref="compareContainer"
    class="relative w-full md:w-1/3 aspect-square cursor-ew-resize overflow-hidden disable-select group"
    @mousemove="setClippedX($event)"
    @mousedown="setClippedX($event)"
    @touchmove="setClippedX($event)"
  >
    <div
      class="absolute top-0 left-0 w-full h-full pointer-events-none"
      :style="clippedStyle"
    >
      <nuxt-picture
        v-if="data.image_left.url"
        :src="data.image_left.url"
        class="w-full h-full"
        :imgAttrs="{ class: 'w-full h-full object-cover ' }"
      />
    </div>
    <div class="w-full h-full pointer-events-none">
      <nuxt-picture
        v-if="data.image_right.url"
        :src="data.image_right.url"
        class="w-full h-full"
        :imgAttrs="{ class: 'w-full h-full object-cover ' }"
      />
    </div>
    <div
      class="absolute w-px top-0 bottom-0 bg-white pointer-events-none"
      :style="{ left: clippedX + 'px' }"
    >
      <div class="absolute top-[50%] left-0.5">
        <svg
          width="26"
          height="17"
          viewBox="0 0 26 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-6 group-hover:-translate-x-1/3 -translate-x-1/2 transition duration-200"
        >
          <line y1="8.5" x2="25" y2="8.5" stroke="white"></line>
          <line
            x1="17.3536"
            y1="0.646447"
            x2="25.6267"
            y2="8.9196"
            stroke="white"
          ></line>
          <line
            x1="25.4854"
            y1="8.35355"
            x2="17.3537"
            y2="16.4853"
            stroke="white"
          ></line>
        </svg>
      </div>
      <div class="absolute top-[50%]">
        <svg
          width="26"
          height="17"
          viewBox="0 0 26 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-6 group-hover:-translate-x-2/3 -translate-x-1/2 transition duration-200 rotate-180"
        >
          <line y1="8.5" x2="25" y2="8.5" stroke="white"></line>
          <line
            x1="17.3536"
            y1="0.646447"
            x2="25.6267"
            y2="8.9196"
            stroke="white"
          ></line>
          <line
            x1="25.4854"
            y1="8.35355"
            x2="17.3537"
            y2="16.4853"
            stroke="white"
          ></line>
        </svg>
      </div>
    </div>
  </div>
  <div v-else-if="data.image_left || data.image_right" ref="singleImageContainer" class="relative w-full md:w-1/3 aspect-square overflow-hidden">
    <div ref="singleImage" class="absolute inset-x-0 inset-y-[-40px]">
      <nuxt-picture
          v-if="data.image_left.url"
          :src="data.image_left.url"
          class="w-full h-full"
          :imgAttrs="{ class: 'w-full h-full object-cover ' }"
        />
        <nuxt-picture
          v-else-if="data.image_right.url"
          :src="data.image_right.url"
          class="w-full h-full"
          :imgAttrs="{ class: 'w-full h-full object-cover ' }"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageBlock',
  data() {
    return {
      clippedX: 0,
    }
  },
  props: {
    data: Object,
  },
  computed: {
    clippedStyle() {
      return `clip: rect(auto, ${this.clippedX}px, auto, auto)`
    },
  },
  mounted() {
    if (this.$refs.compareContainer) {
      this.clippedX = this.$refs.compareContainer.clientWidth / 2
    }

    if (this.$refs.singleImage) {
      const parallaxOffset = 80
      const imagePosition = this.$refs.singleImage
      const ctaContainer = this.$refs.singleImageContainer
  
      window.addEventListener('scroll', function () {
        let offsetTopPage = ctaContainer.getBoundingClientRect().top
        imagePosition.style.transform = 'translateY(' + (-offsetTopPage + parallaxOffset/2)*(parallaxOffset/this.window.innerHeight) + 'px)'
      })
    }
  },
  methods: {
    setClippedX(e) {
      if ((e.type == 'mousemove' && e.buttons == 1) || e.type == 'mousedown') {
        this.clippedX = e.layerX
      } else if (e.type == 'touchmove') {
        let container = e.srcElement.getBoundingClientRect()
        this.clippedX = e.touches[0].clientX - container.x
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.disable-select >>> * {
  @apply !select-none;
}
</style>
