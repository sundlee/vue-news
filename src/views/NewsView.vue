<template>
  <div class="news-view">
    <p
      v-for="(item, index) in $store.state.news"
      :key="index"
    >
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
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