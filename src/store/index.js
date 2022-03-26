import Vue from 'vue';
import Vuex from 'vuex';
import getters from '@/store/getters'
import actions from '@/store/actions'
import mutations from '@/store/mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {},
  },
  getters,
  mutations,
  actions,
});