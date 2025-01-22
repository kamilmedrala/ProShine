<template>
  <li class="w-full">
    <EffectAppear class="h-full">
      <div class="h-full p-5 md:p-10 bg-gray-light rounded-md">
        <div class="flex items-center mb-5">
          <div v-if="data.icon" class="size-12">
            <nuxt-picture class="size-full" :alt="data.title + 'icon'" :imgAttrs="{ class: 'size-full object-contain object-bottom' }" loading="lazy" :src="replaceImgUrlWithAlias(data.icon)" />
          </div>
          <h3 v-if="data.title" class="pl-5 text-gold font-serif">
            {{ data.title }}
          </h3>
        </div>
        <div v-if="data.Description" class="" v-html="data.Description"></div>
      </div>
    </EffectAppear>
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