<template>
  <div>
    <ul class="ask-list">
      <li
        class="post"
        v-for="(item, index) in fetechedAsk"
        :key="index"
      >
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link :to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link class="news-title" :to="`item/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>