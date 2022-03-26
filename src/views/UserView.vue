<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <template slot="time">{{ userInfo.created }}</template>
      <template slot="karma">{{ userInfo.karma }}</template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue'

export default {
  name: 'UserView',
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>
