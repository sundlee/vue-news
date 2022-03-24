<template>
  <div class="jobs-view">
    <div
      v-for="(job, index) in jobsList"
      :key="index"
    >
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { fetchJobsList } from "@/api";

export default {
  name: 'JobsView',
    data() {
    return {
      jobsList: [],
    };
  },
  created() {
    fetchJobsList()
      .then((response) => {
        console.log(response);
        this.jobsList = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>

</style>