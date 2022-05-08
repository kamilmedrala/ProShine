<template>
  <div
    ref="target"
    class="w-full transition transform duration-700"
    :class="{ 'opacity-0 md:translate-y-5': !targetIsVisible }"
  >
    <slot> </slot>
  </div>
</template>

<script>
import { useElementVisibility } from '@vueuse/core'
import { ref } from '@vue/composition-api'
export default {
  name: 'Appear',
  setup() {
    const target = ref(null)
    const targetIsVisible = useElementVisibility(target)

    return {
      target,
      targetIsVisible,
    }
  },
}
</script>

<style></style>
