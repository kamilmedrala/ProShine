<template>
  <div class="w-full relative bg-gray-dark z-10 overflow-hidden">
    <div class="mx-auto px-[5%] py-10 md:py-20 lg:container relative">
      <div class="flex flex-col md:flex-row justify-center md:justify-start">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h2 class="mb-5 text-gold font-light font-serif">Menu</h2>
          <ul class="">
            <li v-for="(item, index) in menu" :key="index" class="mb-2">
              <nuxt-link
                v-if="item.link"
                :to="item.link"
                class="p-2 text-white hover:text-gold font-light text-base md:text-xl transition duration-200"
              >
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <FeatureContact class="md:w-1/2" />
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  menu: {
      type: Object,
      required: true,
    },
})

</script>

<style></style>
