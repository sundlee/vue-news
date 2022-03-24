<template>
  <div class="ask-view">
    <div
      v-for="(ask, index) in askList"
      :key="index"
    >
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { fetchAskList } from "@/api";

export default {
  name: 'AskView',
  data() {
    return {
      askList: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => {
        console.log(response);
        this.askList = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>

</style>