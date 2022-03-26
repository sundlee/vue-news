import ListView from '@/views/ListView.vue';
import bus from '@/utils/bus.js';

export default function createListView(name) {
  return {
    name,
    mounted() {
      bus.$emit('end:spinner');
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
