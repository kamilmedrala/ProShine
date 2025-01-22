<template>
  <div ref="targetContainer" class="flex flex-col mb-10 md:mb-0 max-w-32 lg:max-w-none">
    <EffectAppear :delay="props.delay" @visible="updateCounter">
      <span
        class="text-5xl 2xl:text-6xl text-gold font-serif text-right"
      > 
        <NumberFlow :value="value" :continuous="true" :prefix="symbol === '+' ? symbol : ''" :suffix="symbol !== '+' ? symbol : ''" />
      </span>
      <p class="block xl:text-right text-lg -mt-2.5 xl:-mt-5 text-black xl:text-white">
        {{ title }}
      </p>
    </EffectAppear>
  </div>
</template>

<script setup>
import NumberFlow from '@number-flow/vue';

const props = defineProps({
  delay: Number,
  title: String,
  target: [Number, String],
  symbol: {
    type: String,
    default: ''
  },
});

const targetContainer = ref(null);
const value = ref(0);

const updateCounter = () => {
  value.value = props.target
};

</script>

<style></style>
