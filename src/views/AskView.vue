<template>
  <div class="ask-view">
    <p
      v-for="(item, index) in fetechedAsk"
      :key="index"
    >
      <router-link :to="`item/${item.id}`">
        {{ item.title }}
      </router-link>
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