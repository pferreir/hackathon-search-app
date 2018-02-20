import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keyword: ''
  },
  mutations: {
    updateKeyword (state, keyword) {
      state.keyword = keyword;
      console.log(state.keyword);
    }
  }
});
