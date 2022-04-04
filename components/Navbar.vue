<template>
  <nav class="fixed left-0 px-[5%] w-full z-30" >
      <div class="flex justify-between">
          <div>
              <nuxt-link to="/">
                <img class=" my-1 w-14 md:w-20 transition-all duration-200" :class="{'md:w-14':this.collapsed}" src="../assets/images/logo.png" alt="ProShine Logo">
              </nuxt-link>
          </div>
              <ul class="flex items-center justify-end">
                  <li class="ml-4" v-for="item in menu" :key="item.title">
                      <nuxt-link class="block p-2 text-white font-light hover:text-gold transition" :to="item.link">{{item.title}}</nuxt-link>
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
            type: Object,
            required: true
        }
    },
    data(){
        return{
            collapsed: false
        }
    },
    mounted(){
        window.addEventListener('scroll',this.setCollapseState)
    },
    methods:{
        setCollapseState(){
            if (window.scrollY > 50) {
                this.collapsed = true                
            }
            else{
                this.collapsed = false
            }
        }
    }
}
</script>

<style>

</style>