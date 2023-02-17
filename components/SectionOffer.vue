<template>
  <ul class="w-full flex-wrap flex justify-between gap-5 md:gap-10">
        <OfferTile v-for="offer,index in data" :key="index" :data="offer" />
      </ul>
</template>

<script>
export default {
    name: 'SectionOffer',
    props:{
        data: Array
    }
}
</script>

<style>

</style>