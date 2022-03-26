import {
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
 } from '@/api';

export default {
  async FETCH_USER({ commit }, name) {
    try {
      const { data } = await fetchUserInfo(name);
      commit('SET_USER', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  async FETCH_ITEM({ commit }, id) {
    try {
      const { data } = await fetchCommentItem(id);
      commit('SET_ITEM', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    try {
      const { data } = await fetchList(pageName);
      commit('SET_LIST', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
};