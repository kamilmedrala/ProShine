<template>
  <nav class="mx-[5%] fixed">
      <div class="flex justify-between">
          <div>
              <nuxt-link to="/">
                <img class="w-14 md:w-20" src="../assets/images/logo.png" alt="ProShine Logo">
              </nuxt-link>
          </div>
              <ul class="flex items-center justify-end">
                  <li v-for="item in menu" :key="item.title">
                      <nuxt-link class="text-white font-light">{{item.title}}</nuxt-link>
                  </li>
              </ul>
      </div>
  </nav>
</template>

<script>
export default {
    name:'Navbar',
    props:{
        menu:{
            type:Object,
            required:false
        }
    }
}
</script>

<style>

</style>