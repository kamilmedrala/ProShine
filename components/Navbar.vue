<template>
  <nav
    class="fixed left-0 top-0 w-full z-50 transition bg-gradient-to-b from-gray-dark to-transparent"
  >
    <div
      class="relative px-[5%] mx-auto lg:container flex justify-between transform duration-500"
      :class="{ 'translate-y-[-50%] opacity-0': !loaded }"
    >
      <div class="z-[70]">
        <nuxt-link to="/" @click.native="closeSideMenu()">
          <nuxt-picture
            width="80"
            height="80"
            :imgAttrs="{
              class: 'my-1 w-[inherit] transition-all duration-200',
            }"
            class="w-16 md:w-20"
            :class="{ 'w-14 md:w-14': this.collapsed }"
            src="/logo.png"
            alt="ProShine Logo"
            @load="loaded = true"
          />
        </nuxt-link>
      </div>
      <div class="z-[70] flex items-center md:hidden">
        <button
          class="menu"
          @click="toggleSideMenu()"
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
        class="z-[60] absolute top-0 left-0 h-screen w-screen pt-20 md:pt-0 md:h-auto md:w-auto md:relative md:flex items-center justify-end transition duration-300"
        :class="
          sideMenu
            ? 'bg-gray-dark/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-0 blur-fix'
            : 'pointer-events-none md:pointer-events-auto'
        "
        @click="toggleSideMenu()"
      >
        <li
          class="ml-5 md:ml-10"
          v-for="(item, index) in menu"
          :key="item.title"
        >
          <nuxt-link
            class="inline-block p-2 text-white text-4xl md:text-lg font-extralight hover:text-gold transform translate-x-4 md:translate-x-0 opacity-0 md:opacity-100 transition duration-200 md:duration-150 after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:rounded-full after:ml-2 after:bg-gold after:transition-all after:duration-200"
            :class="{ 'translate-x-0 opacity-100': sideMenu }"
            :style="{ transitionDelay: 50 * index + 'ms' }"
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
      loaded: false,
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
    closeSideMenu() {
      this.sideMenu = false
    },
  },
}
</script>

<style lang="postcss" scoped>
.nuxt-link-active {
  @apply text-gold after:w-4/5;
}

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
