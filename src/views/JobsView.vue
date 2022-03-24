<template>
  <div class="jobs-view">
    <p
      v-for="(job, index) in $store.state.jobs"
      :key="index"
    >
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p>
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