import Vue from 'vue';
import Vuex from 'vuex';
import { getRecords } from '@/libs/api.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keyword: '',
    currentPage: 1,
    results: {}
  },
  mutations: {
    updateKeyword (state, keyword) {
      state.keyword = keyword;
    },
    updateResults (state, results) {
      state.results = results;
    },
    updatePage (state, page) {
      state.currentPage = page;
    }
  },
  actions: {
    getResultList (context) {
      getRecords(context.state.keyword, 25, context.state.currentPage).then((response) => {
        context.commit('updateResults', response.data);
      }).catch((e) => {
        this.errors.push(e);
      });
    }
  }
});
