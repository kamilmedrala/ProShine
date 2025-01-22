<template>
  <div
    ref="target"
    class="w-full transition transform duration-700"
    :class="{ 'opacity-0 appear-waiting scale-[98%]': !isVisible }"
  >
    <slot> </slot>
  </div>
</template>

<script setup>
import { ref } from '@vue/composition-api'
import { useElementVisibility } from '@vueuse/core'

const props= defineProps({
  delay: {
    type: Number,
    default: 0,
  },
})

const target = ref(null)
const targetIsVisible = useElementVisibility(target)
const isVisible = ref(false)
const emit = defineEmits(['visible'])

watch(targetIsVisible, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      isVisible.value = newVal
      emit('visible', newVal)
    }, props.delay)
  }
})
</script>

<style></style>
