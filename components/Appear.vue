<template>
  <div
    ref="target"
    class="w-full transition duration-500"
    :class="{ 'opacity-0': !targetIsVisible }"
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
