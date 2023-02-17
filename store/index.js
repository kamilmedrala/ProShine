export const state = () => ({
  bg: false,
  homepage: {
    banner: {
      zdjecie1: {
        title: 'Mercedes_interior',
        url: 'https://api.kamilmedrala.thecamels.eu/wp-content/uploads/2022/04/Zrzut-ekranu-2022-04-15-010304.png',
        alt: 'Mercedes interior',
      },
      zdjecie2: {
        url: 'https://api.kamilmedrala.thecamels.eu/wp-content/uploads/2022/04/rs6side.jpeg',
        alt: 'RS6',
      },
    },
  },
  offerPage:{

  }
})

export const getters = {
  homepageData: (state) => {
    return state.homepage
  },

  offerpageData: (state) => {
    return state.offerPage
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
        'https://api.kamilmedrala.thecamels.eu/wp-json/wp/v2/pages/2?acf_format=standard'
      )
      .then((response) => {
        commit('setAcfData', { response: response.acf, location: 'homepage'})
      })
  },
}
