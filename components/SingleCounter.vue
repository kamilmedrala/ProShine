<template>
    <div ref="targetContainer" class="flex flex-col mb-10 md:mb-0">
            <span
              class="min-w-[75px] text-5xl md:text-6xl text-gold tablet:mr-2 font-main font-light italic text-left"
            >
              {{ symbol === "+" ? symbol + displayValue : displayValue + symbol }}
            </span>
            <p class="mt-2 md:mt-5 block text-left"
            >
            {{ title }}
            </p>
    </div>
  </template>
  
  <script>
  import { useElementVisibility } from "@vueuse/core";
  import { ref } from "@vue/composition-api";
  
  export default {
    name: "SingleCounter",
    props: {
      title: String,
      target: Number|String,
      symbol: {
        type: String,
        default: ''
      },
    },
    setup() {
      const targetContainer = ref(null);
      const targetIsVisible = useElementVisibility(targetContainer);
  
      return {
        targetContainer,
        targetIsVisible,
      };
    },
    data() {
      return {
        value: 0,
        displayValue: 0,
        visited: false,
      };
    },
    watch: {
      targetIsVisible(value) {
        if (value) {
          this.visited = true;
          this.updateCounter();
        }
      },
    },
    methods: {
      updateCounter() {
        const increment = this.target / 100;
        if (this.value < this.target) {
          this.value = Math.round(this.value * 10000) / 10000 + increment;
          this.displayValue = Math.trunc(this.value);
          setTimeout(() => {
            this.updateCounter();
          }, 12);
        }
      },
    },
  };
  </script>
  
  <style></style>