<template>
  <transition>
    <div class="w-full">
      <h1 v-if="h1"
        class="relative header-text text-[50px] md:text-[90px] tracking-widest uppercase italic transition leading-normal"
      >
        {{ title }}
      </h1>
      <h2 v-else
      class="relative header-text text-[42px] md:text-[64px] tracking-widest font-normal uppercase italic transition leading-normal">
        {{ title }}

      </h2>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    h1: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    beforeEnter(el) {
      console.log('before')
    },

    enter() {
      console.log('entered')
    },
  },
}
</script>

<style>
h1.header-text {
  -webkit-text-stroke: 0.5px white;
  -webkit-text-fill-color: transparent;
}

h2.header-text {
  -webkit-text-stroke: 0.5px white;
  -webkit-text-fill-color: transparent;
}

</style>
