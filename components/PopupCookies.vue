<template>
  <Transition name="slide-right">
    <div
      v-if="isVisible"
      class="fixed bottom-0 right-0 md:bottom-10 md:right-10 p-5 md:p-0 z-50"
    >
      <div
        class="w-full max-w-[420px] border border-gold bg-[#171717]/95 backdrop-blur-lg blur-fix rounded-md p-5 shadow-xl shadow-black/20"
      >
        <p class="text-base">
          {{ description }}
          <nuxt-link
            class="text-gold transition duration-200 underline"
            :to="privacyPolicyLink"
            >{{ privacyPolicyText }}
          </nuxt-link>
        </p>
        <div class="max-h-14 mt-3 transition-all duration-200 overflow-hidden"
        :class="{'!max-h-0 opacity-0' :!settingsExpanded}">
          <div class=" w-full py-3 border border-x-0 border-solid border-y-gray-light/50">
            <input v-model="ga_checked" class="appearance-none -bottom-0.5 ml-3 inline-block w-4 h-4 border border-solid border-gold rounded-[3px] bg-transparent hover:bg-gold/10 checked:bg-gold checked:hover:bg-gold relative after:block after:w-2.5 after:h-1.5 after:absolute after:left-0.5 after:top-[3px] after:border-0 after:border-solid after:border-b-2 after:border-l-2 after:opacity-0 checked:after:opacity-100 after:-rotate-45 after:border-gray-dark  transition " type="checkbox" id="analytics" name="google_analytics">
            <label for="analytics" class="pl-3 mb-1 inline-block text-white ">
              Analityka
            </label>
          </div>
        </div>
        <div class="mt-3 flex flex-nowrap justify-end md:items-center">
          <button
            class="md:w-max grow-0 transition duration-200 text-base text-gray-light font-light py-0.5 px-1 md:p-2 hover:bg-gold/5"
            @click="toggleSettingsExpand()">
            <svg v-if="settingsExpanded" class="inline-block w-4 h-4 -rotate-90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
              <defs>
              </defs>
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <path class="fill-gray-light" d="M 65.75 90 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 29.2 45 L 68.225 5.975 c 1.367 -1.367 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.366 -4.95 0 l -41.5 41.5 c -1.367 1.366 -1.367 3.583 0 4.949 l 41.5 41.5 C 63.958 89.658 64.854 90 65.75 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              </g>
            </svg>
            <p v-else class="inline-block text-sm">
              {{ settingsText }}
            </p>
          </button>
          <button
            v-if="settingsExpanded"
            class="md:w-max grow-0 transition duration-200 text-sm text-gray-light font-light py-0.5 px-1 md:p-2 hover:bg-gold/5"
            @click="setConsent()">
            {{ selectedConsentText }}
          </button>
          <StyledButton
            class="[&_button]:!text-base [&_button]:!py-2 [&_button]:!px-5 ml-2 md:ml-3"
            :text="allConsentText"
           @click.native="setConsentAll()"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
  import { useCookies } from '@vueuse/integrations/useCookies'
export default {
  name: 'PopupCookies',
  props: {
    description: {
      type: String,
      default:
        'Ta strona używa plików cookies, aby dostosować treści i analizować ruch na stronie.',
    },
    privacyPolicyText: {
      type: String,
      default: 'Poznaj szczegóły.',
    },
    privacyPolicyLink: {
      type: String,
      default: '/polityka-prywatnosci',
    },
    selectedConsentText: {
      type: String,
      default: 'Zaakceptuj wybrane',
    },
    settingsText: {
      type: String,
      default: 'Ustawienia',
    },
    allConsentText: {
      type: String,
      default: 'Zaakceptuj wszystkie',
    },
  },
  setup(){
    const cookies = useCookies()
    const consentCookie = cookies.get(['CONSENT'])
    const gaCookie = cookies.get(['_ga'])

    return {
      cookies,
      consentCookie,
      gaCookie
    }
  },
  data() {
    return {
      isMounted: false,
      settingsExpanded: false,
      ga_checked: false,
    }
  },
  computed: {
    isVisible(){
      return this.isMounted && !(this.gaCookie || this.consentCookie)
    }
  },
  methods:{
    setConsent(){
      this.cookies.set('CONSENT','TRUE')
      this.consentCookie = true

      if (this.ga_checked) {        
        this.gaCookie = true
        this.$gtag.optIn()
        this.$gtag.pageview(this.$route)
      }
    },

    setConsentAll(){
      this.ga_checked = true
      this.setConsent()
    },
    
    toggleSettingsExpand(){
      this.settingsExpanded = !this.settingsExpanded
    }
  },
  mounted() {
    this.isMounted = true

    if (!this.gaCookie){
      this.$gtag.optOut()
    }else{
      this.$gtag.optIn()
    }
  },
}
</script>

<style>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(120%);
}
</style>
