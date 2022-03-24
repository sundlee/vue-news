<template>
  <div class="news-view">
    <div
      v-for="(news, index) in $store.state.news"
      :key="index"
    >
      {{ news.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsView',
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style>

</style>