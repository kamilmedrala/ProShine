<template>
    <div class="w-full text-white [&_em]:not-italic [&_em]:text-gold [&_em]:font-serif font-light ">
      <h1 v-if="h1"
        class="text-5xl md:text-6xl"
        v-html="title"
        >
      </h1>
      <h2 v-else
      class="font-serif text-gold text-4xl md:text-5xl"
      v-html="title">
      </h2>
    </div>
</template>

<script>
export default {
  name: 'UiHeader',
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
}
</script>