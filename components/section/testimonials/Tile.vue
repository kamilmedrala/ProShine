<template>
    <div class="relative w-full pl-0 p-5 pr-8 mr-5 lg:mr-0 overflow-hidden">
        <span
            class="absolute z-10 right-12 md:right-5  lg:!transform-none -top-20 text-[180px] text-gold opacity-20 select-none"
            data-swiper-parallax="40">“</span>
        <div class="relative z-10">
            <div class="flex justify-between mb-3">
                <p class="text-2xl md:text-3xl">{{ data.author }}</p>
                <span class="text-gold text-2xl font-light italic mr-14">5<span class="text-lg text-gray-dark"> /
                        5</span></span>
            </div>
            <p class="font-extralight italic mb-5 text-left">
                "{{ data.description }}"
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: {
        type: Object,
        required: true,
    },
})
</script>