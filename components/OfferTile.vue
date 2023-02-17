<template>
  <li class="basis-full md:basis-[calc(50%-20px)] lg:basis-[calc(50%-20px)]">
    <Appear class="h-full">
    <div class="h-full p-5 md:p-10 bg-gray-main">
        <div class="flex items-center mb-5">
          <div v-if="data.icon" class="h-10 w-10">
            <nuxt-picture class="w-full h-full" :imgAttrs="{class: 'w-full h-full'}" :src="data.icon" />
          </div>
          <h2 v-if="data.title" class="pl-5 italic text-gold">
            {{ data.title }}
          </h2>
        </div>
        <div v-if="data.Description" class="" v-html="data.Description"></div>
      </div>
    </Appear>
  </li>
</template>

<script>
export default {
  name: 'OfferTile',
  props: {
    data: Object,
  },
}
</script>

<style scoped>
.backdrop-blur-custom{
  backdrop-filter: blur(6px);
}
</style>
