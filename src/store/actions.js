import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
 } from '@/api';

export default {
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
    .then(({ data }) => {
      commit('SET_USER', data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
    .then(({ data }) => {
      commit('SET_ITEM', data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => {
        commit('SET_LIST', data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};