<template>
  <div class="flex flex-col md:flex-row h-screen">
      <div class="fade-left transition duration-200 flex items-center shrink-0 relative z-20 basis-1/2">
        <slot name="left">

        </slot>
      </div>
      <div class="fade-right transition duration-200 flex items-center shrink-0 flex-grow-0 relative basis-1/2">
        <slot name="right">

        </slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'Hero'
}
</script>

<style>
.page-enter-active,
.page-leave-active{
  transition: all 0.15s;
}

.page-enter-from ,
.page-enter ,
.page-leave-to {
    opacity: 0;
}

.page-enter-from .fade-left,
.page-enter .fade-left,
.page-leave-to .fade-left{
  transform: translateX(-20px);
}

.page-enter-from .fade-right,
.page-enter .fade-right,
.page-leave-to .fade-right{
  transform: translateX(20px);
}
</style>