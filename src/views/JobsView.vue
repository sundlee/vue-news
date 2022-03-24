<template>
  <div class="jobs-view">
    <div
      v-for="(job, index) in $store.state.jobs"
      :key="index"
    >
      {{ job.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobsView',
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style>

</style>