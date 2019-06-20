import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search_input_text: '',
    search_count: null,
    users_array: null,
    bearer: ''
  },
  mutations: {
    SET_SEARCH_INPUT_TEXT (state, text) {
      state['search_input_text'] = text
    },
    SET_SEARCH_COUNT (state, count) {
      state['search_count'] = count
    },
    SET_USERS_ARRAY (state, users) {
      state['users_array'] = users
    },
    SET_BEARER_TOKEN (state, bearer) {
      state['bearer'] = bearer
    }
  },
  actions: {
    setSearchInputText (context, text) {
      context.commit('SET_SEARCH_INPUT_TEXT', text)
    },
    setSearchCount (context, count) {
      context.commit('SET_SEARCH_COUNT', count)
    },
    setUsersArray (context, users) {
      context.commit('SET_USERS_ARRAY', users)
    },
    setBearerToken (context, bearer) {
      context.commit('SET_BEARER_TOKEN', bearer)
    }
  },
  getters: {
    get_search_input_text: state => state.search_input_text,
    get_search_count: state => state.search_count,
    get_users_array: state => state.users_array,
    get_bearer_token: state => state.bearer
  }
})
