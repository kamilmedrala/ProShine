<template>
    <div :class="{'w-full flex justify-center': center}">
      <nuxt-link
        v-if="url"
        :to="url"
        class="btn-primary"
      >
        {{ text }}
      </nuxt-link>
      <a
        v-else-if="tel"
        :href="'tel:' + tel"
        class="btn-primary"
      >
        {{ tel }}
      </a>
      <a
        v-else-if="mail"
        href=""
        class="btn-primary"
        >{{ text }}
      </a>
      <button
        v-else
        class="btn-primary"
        >{{ text }}
          </button>
    </div>
</template>

<script setup>

const props = defineProps({
  appear: Boolean,
  text: String,
  url: String,
  tel: String,
  mail: String,
  center: Boolean,
})
</script>