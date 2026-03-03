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
            <p class="font-extralight italic mb-3 text-left">
                "{{ data.description.slice(0, 400) }}<span v-show="!isExpanded && shouldTruncate">...</span><span
                    v-show="isExpanded || !shouldTruncate">{{ data.description.slice(400) }}</span>
                "
            </p>
            <button v-if="shouldTruncate" @click="isExpanded = !isExpanded"
                class="text-gold text-sm font-medium hover:underline focus:outline-none transition-all duration-300">
                {{ isExpanded ? 'Zwiń' : 'Czytaj dalej' }}
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})

const isExpanded = ref(false)
const shouldTruncate = computed(() => props.data.description.length > 400)
</script>