<template>
  <div>
    <Transition name="fade">
      <h1 ref="fadeElement" class=" text-[40px] md:text-[80px] pt-[40vh] h-[200vh] uppercase italic header-text transition">Realizacje</h1>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  
}
</script>

<style>

  .header-text{
    -webkit-text-stroke: 0.5px white;
    -webkit-text-fill-color:transparent;
  }

</style>
