<template>
  <nav
    class="fixed left-0 top-0 px-[5%] w-full z-50 transition bg-gradient-to-b from-gray-dark to-transparent"
  >
    <div class="relative flex justify-between">
      <div>
        <nuxt-link to="/">
          <nuxt-picture
            width="80"
            height="80"
            :imgAttrs="{
              class: 'my-1 w-[inherit] transition-all duration-200',
            }"
            class="w-14 md:w-20"
            :class="{ 'md:w-14': this.collapsed }"
            src="/logo.png"
            alt="ProShine Logo"
          />
        </nuxt-link>
      </div>
      <div class="z-[70] flex items-center md:hidden">
        <button
          class="menu"
          @click="toggleSideMenu"
          aria-label="Side Menu"
          :class="{ opened: sideMenu }"
          :aria-expanded="sideMenu ? 'true' : 'false'"
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path
              class="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path class="line line2" d="M 20,50 H 80" />
            <path
              class="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
      <ul
        class="z-[60] absolute top-0 left-0 h-screen w-screen pt-10 md:pt-0 md:h-auto md:w-auto bg-gray-dark md:bg-transparent md:relative md:flex items-center justify-end"
        :class="sideMenu ? 'block' : 'hidden'"
      >
        <li class="ml-10" v-for="item in menu" :key="item.title">
          <nuxt-link
            class="block p-2 text-white text-lg font-extralight hover:text-gold transition"
            :to="item.link"
            >{{ item.title }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      collapsed: false,
      sideMenu: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.setCollapseState)
  },
  methods: {
    setCollapseState() {
      if (window.scrollY > 50) {
        this.collapsed = true
      } else {
        this.collapsed = false
      }
    },
    toggleSideMenu() {
      this.sideMenu = !this.sideMenu
    },
  },
}
</script>

<style>
.line {
  fill: none;
  stroke: white;
  stroke-width: 2;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 2;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 2;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 2;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 2;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 2;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 2;
}
</style>
