<template>
  <div class="relative z-10">
    <div class="flex flex-wrap gap-2 fade-right transition duration-200">
      <div
        v-for="(image, index) in data"
        :key="index"
        class="flex-grow h-[150px] sm:h-[230px] md:h-[300px] lg:h-[450px]"
      >
        <nuxt-picture
          :src="image.full_image_url"
          class="h-full cursor-pointer"
          :imgAttrs="{
            class: 'loading object-cover h-full w-full',
            loading: index < 10 ? 'eager' : 'lazy',
          }"
          @load="removeLoadingStyle($event)"
          @click="modalOpen(image.full_image_url)"
          placeholder
        />
      </div>
    </div>
    <div
      ref="modal"
      class="fixed inset-0 bg-gray-dark/70 px-6 md:px-10 pt-24 pb-10 transition duration-300"
      :class="[
        modalActive
          ? 'opacity-1 backdrop-blur-md'
          : 'opacity-0 pointer-events-none',
      ]"
      @click="modalClose($event)"
    >
      <div class="h-full flex justify-center items-center">
        <div class="relative max-h-full md:h-full">
          <img
            :src="modalImgUrl"
            class="loading h-full object-contain transition duration-300"
            loading="lazy"
            @load="removeLoadingStyle($event)"
          />
          <span
            class="absolute top-0 -right-10 w-10 h-10 pl-2 text-white text-3xl cursor-pointer transition"
            >X</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TilesGallery',
  props: {
    data: Array,
  },
  data() {
    return {
      modalActive: false,
      modalImgUrl: '',
    }
  },
  methods: {
    removeLoadingStyle(event) {
      event.target.classList.remove('loading')
    },
    modalOpen(imageUrl) {
      this.modalActive = true
      this.modalImgUrl = imageUrl
    },
    modalClose(event) {
      if (event.target.nodeName != 'IMG') {
        this.modalActive = false
        this.$refs.modal.querySelector('img').classList.add('loading')
        const vm = this
        setTimeout(() => {
          vm.modalImgUrl = ''
        }, 300)
      }
    },
  },
}
</script>

<style scoped>
img.loading ~ span {
  @apply opacity-0;
}
</style>
