import { isEmpty as _isEmpty } from 'lodash'


const filterWords = ['yoast_head', 'meta', '{}']

const filterData = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] == 'string') {
      obj[key] = obj[key].replace(
        /(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/gs,
        ''
      )
    }

    if (
      _isEmpty(key) ||
      RegExp(filterWords.join('|')).test(key) ||
      obj[key] == null ||
      typeof obj[key] == 'undefined' ||
      (Array.isArray(obj[key]) && !obj[key].length) ||
      obj[key] == '' ||
      obj[key] == []
    ) {
      delete obj[key]
    } // delete
    else if (obj[key] && typeof obj[key] === 'object') filterData(obj[key]) // recurse
  })
}

export const state = () => ({
    homepage:{
      banner:{}
    }
  })
  
  export const mutations = {
      setData($state,response){
        Object.assign($state.homepage.banner, response);
      }
  }

  export const actions = {
    async nuxtServerInit({ commit }){
        await this.$axios.$get('https://api.kamilmedrala.thecamels.eu/wp-json/wp/v2/pages/2/')
        .then((response)=>{
          filterData(response)
          commit('setData',response.acf);
        })
    }
  }
//   actions: {
//     async getIP ({ commit }) {
//       const ip = await this.$axios.$get('http://icanhazip.com')
//       commit('SET_IP', ip)
//     }
//   }