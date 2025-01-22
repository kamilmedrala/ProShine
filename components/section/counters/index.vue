<template>
    <div class="w-full">
        <div class="grid md:flex grid-cols-2 gap-x-10 md:gap-0 p-5 md:pt-1 justify-between">
            <SectionCountersSingle v-for="(item, name, index) in data" :delay="index*300" :key="index" :target="item.value" :title="item.description" :symbol="item.symbol"/>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object
});
</script>