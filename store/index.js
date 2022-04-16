export const state = () => ({
  homepage: {
    banner: {
      zdjecie1: {
        title: 'Mercedes_interior',
        url:
          'https://api.kamilmedrala.thecamels.eu/wp-content/uploads/2022/04/Zrzut-ekranu-2022-04-15-010304.png',
        alt: 'Mercedes interior',
      },
      zdjecie2: {
        url:
          'https://api.kamilmedrala.thecamels.eu/wp-content/uploads/2022/04/rs6side.jpeg',
        alt: 'RS6',
      },
    },
  },
})

export const mutations = {
  setData(state, response) {
    state.homepage.banner = response
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    await this.$axios
      .$get('https://api.kamilmedrala.thecamels.eu/wp-json/wp/v2/pages/2/')
      .then((response) => {
        commit('setData', response.acf)
      })
  },
}
