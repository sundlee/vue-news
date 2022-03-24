<template>
  <div class="ask-view">
    <div
      v-for="(ask, index) in fetechedAsk"
      :key="index"
    >
      {{ ask.title }}
    </div>
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