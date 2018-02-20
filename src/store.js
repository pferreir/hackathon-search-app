import Vue from 'vue';
import Vuex from 'vuex';
import { getRecords } from '@/libs/api.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keyword: '',
    currentPage: 1,
    results: {},
    loading: false,
    sortBy: 'bestmatch'
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
    },
    setLoading (state, loading) {
      state.loading = loading;
    },
    updateSortBy (state, sortBy) {
      state.sortBy = sortBy;
    }
  },
  actions: {
    getResultList (context) {
      context.commit('setLoading', true);
      getRecords(context.state.keyword, 25, context.state.currentPage, context.state.sortBy).then((response) => {
        context.commit('updateResults', response.data);
        context.commit('setLoading', false);
      }).catch((e) => {
        this.errors.push(e);
      });
    }
  }
});
