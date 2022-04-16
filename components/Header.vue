<template>
  <div class="w-full">
      <h1 class="relative header-text text-[40px] md:text-[90px] tracking-widest uppercase italic transition pointer-events-none">{{title}}</h1>
  </div>
</template>

<script>
export default {
    name: 'Header',
    props:{
        title:{
            type:String,
            required:true
        }
    }
}
</script>

<style>

    .header-text{
        -webkit-text-stroke: 0.5px white;
        -webkit-text-fill-color:transparent;
    }
  
</style>