<template>
    <div :class="{'w-full flex justify-center': center}">
        <div class="relative w-fit overflow-hidden group" :class="[{'animated':appear}]">
          <nuxt-link
            v-if="url"
            :to="url"
            class="inline-block pointer-events-auto relative z-20 px-10 py-2.5  text-gray-main text-lg md:text-xl italic transition duration-200"
          >
            {{ text }}
          </nuxt-link>
          <a
            v-else-if="tel"
            href=""
            class="inline-block pointer-events-auto relative z-20 px-10 py-2.5  text-gray-main text-lg md:text-xl italic transition duration-200"
          >
            {{ text }}
          </a>
          <a
            v-else-if="mail"
            href=""
            class="inline-block pointer-events-auto relative z-20 px-10 py-2.5 text-gray-main text-lg md:text-xl italic transition duration-200"
            >{{ text }}
          </a>
          <span class="background absolute top-0 left-0 w-full h-full bg-gold group-hover:bg-gold/70 transition duration-200"></span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'StyledButton',
  props: {
    appear: Boolean,
    text: String,
    url: String,
    tel: String,
    mail: String,
    center: Boolean,
  },
}
</script>

<style scoped>

@keyframes slideBg {
    from{
        transform: translateX(-105%);
    }
    to{
        transform: translateX(0);
    }
}

@keyframes slideText {
    from{
        opacity: 0;
    }
    to{
        opacity: 100;
    }
}

.animated .background{
    transform: translateX(-105%);
    animation: slideBg;
    animation-duration: 600ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 3000ms;
}

.animated a{
    opacity: 0;
    animation: slideText;
    animation-duration: 550ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 3000ms;
}

</style>
