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
        <div class="mt-5 gap-5 flex flex-nowrap justify-end md:items-center">
          <button
            class="md:w-max grow-0 transition duration-200 text-sm md:text-base text-gray-light font-light py-0.5 px-1 md:p-2 hover:bg-gold/5"
            @click="setConsent()">
            {{ requiredConsentText }}
          </button>
          <StyledButton
            class="[&_button]:!text-base [&_button]:!py-2 [&_button]:!px-10"
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
    requiredConsentText: {
      type: String,
      default: 'Zaakceptuj wymagane',
    },
    allConsentText: {
      type: String,
      default: 'Zaakceptuj',
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

    },
    setConsentAll(){
      this.setConsent()
      this.gaCookie = true
      this.$gtag.optIn()
      this.$gtag.pageview(this.$route)
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
