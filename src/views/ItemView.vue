<template>
  <div>
    <p>{{ $store.state.item.title }}</p>
    <div>{{ $store.state.item.content }}</div>
  </div>
</template>

<script>
export default {
  name: 'ItemView',
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
}
</script>

<style>

</style>