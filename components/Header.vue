<template>
  <transition>
    <div class="w-full">
      <h1
        class="relative header-text text-[50px] md:text-[90px] tracking-widest uppercase italic transition"
      >
        {{ title }}
      </h1>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
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
.header-text {
  -webkit-text-stroke: 0.5px white;
  -webkit-text-fill-color: transparent;
}
</style>
