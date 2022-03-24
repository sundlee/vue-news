<template>
  <div class="ask-view">
    <p
      v-for="(item, index) in fetechedAsk"
      :key="index"
    >
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AskView',
  computed: {
    ...mapGetters({
      fetechedAsk: 'fetechedAsk',
    }),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style>

</style>