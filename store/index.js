export const state = () => ({
  bg: false,
  homepage: {
    banner: {
      zdjecie1: {
        title: 'Mercedes_interior',
        url: 'https://api.proshinedetailing.pl/wp-content/uploads/2022/04/Zrzut-ekranu-2022-04-15-010304.png',
        alt: 'Mercedes interior',
      },
      zdjecie2: {
        url: 'https://api.proshinedetailing.pl/wp-content/uploads/2022/04/rs6side.jpeg',
        alt: 'RS6',
      },
    },
  },
  offerPage:{
  },
  galleryPage:{
  },
  policyPage:{
  },
  contactData:{
  },
})

export const getters = {
  homepageData: (state) => {
    return state.homepage
  },

  offerpageData: (state) => {
    return state.offerPage
  },

  gallerypageData: (state) => {
    return state.galleryPage
  },
  
  
  policypageData: (state) => {
    return state.policyPage
  },

  contactData: (state) => {
    return state.contactData
  },

}

export const mutations = {
  setAcfData(state, payload) {
    state[payload.location] = payload.response
  },
  setMediaData(state, response) {
    state.homepage.logos = response
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    await this.$axios
      .$get(
        'https://api.proshinedetailing.pl/wp-json/wp/v2/pages/2?acf_format=standard'
      )
      .then((response) => {
        commit('setAcfData', { response: response.acf, location: 'homepage'})
      });
    
    await this.$axios
      .$get(
        'https://api.proshinedetailing.pl/wp-json/wp/v2/pages/332?acf_format=standard'
      )
      .then((response) => {
        commit('setAcfData', { response: response.acf, location: 'contactData'})
      })
  },
}
