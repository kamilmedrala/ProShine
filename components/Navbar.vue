<template>
  <nav class="fixed left-0 top-0 px-[5%] w-full z-30 transition bg-gradient-to-b from-gray-dark to-transparent " >
      <div class="flex justify-between">
          <div>
              <nuxt-link to="/">
                <nuxt-picture width="80" height="80" :imgAttrs="{class:'my-1 w-[inherit] transition-all duration-200'}" class="w-14 md:w-20" :class="{'md:w-14':this.collapsed}" src='/logo.png' alt="ProShine Logo"/>
              </nuxt-link>
          </div>
              <ul class="flex items-center justify-end">
                  <li class="ml-10" v-for="item in menu" :key="item.title">
                      <nuxt-link class="block p-2 text-white text-lg font-extralight hover:text-gold transition" :to="item.link">{{item.title}}</nuxt-link>
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