<template>
  <div class="max-w-full px-[5%] mx-auto lg:container lg:max-w-7xl">
    <div class="flex flex-col md:flex-row justify-between p-5 md:px-10 md:py-5 bg-gray-main">
        <Appear v-for="item,index in data" :key="index">
            <SingleCounter :target="item.value" :title="item.description" :symbol="item.symbol"/>
        </Appear>
    </div>
    </div>
</template>

<script>
import SingleCounter from './SingleCounter.vue';
import Appear from './Appear.vue';
export default {
  components: { SingleCounter },
    name: 'Counters',
    props: {
        data: Object
    },
    components:{
        Appear
    },
}
</script>

<style>

</style>