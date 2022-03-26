import ListView from '@/views/ListView.vue';
import bus from '@/utils/bus.js';

export default function createListView(name) {
  return {
    name,
    created() {
      bus.$emit('start:spinner');
      this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        bus.$emit('end:spinner');
      })
      .catch((err) => {
        console.log(err);
      });
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
