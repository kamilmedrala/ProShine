<template>
  <div
    class="w-full flex flex-col-reverse md:items-center md:flex-row h-full pt-20 md:pt-24"
  >
    <div
      class="fade-left transition duration-200 flex items-center shrink-0 relative pointer-events-none basis-1/2 h-full z-40"
    >
      <slot name="left"> </slot>
    </div>
    <div
      class="flex items-center justify-center flex-grow-0 relative basis-1/2 h-full"
    >
      <slot name="right"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}

.page-enter-from,
.page-enter,
.page-leave-to {
  opacity: 0;
}

.page-enter-from .fade-left,
.page-enter .fade-left,
.page-leave-to .fade-left {
  transform: translateX(-20px);
}

.page-enter-from .fade-right,
.page-enter .fade-right,
.page-leave-to .fade-right {
  transform: translateX(20px);
}
</style>
