<template>
  <div class="news-view">
    <div
      v-for="(news, index) in newsList"
      :key="index"
    >
      {{ news.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '@/api';

export default {
  name: 'NewsView',
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    fetchNewsList()
      .then((response) => {
        console.log(response);
        this.newsList = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>

</style>