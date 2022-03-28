<template>
  <section>
    <div class="upvote-container">
      <Upvote 
        v-for="index in upvotes"
        @upvoteSelected="setSelected()"
        :selected="selected === section"
        :key="index"
      />
    </div>
    <AddUpvote @upvoteAdded="onUpvoteAdded()" />
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';
  import AddUpvote from './AddUpvote.vue';
  import Upvote from './Upvote.vue';

  const store = useStore();
  const upvotes = ref(0);

  const props = defineProps({
    section: Number
  });

  const onUpvoteAdded = () => {
    upvotes.value++;
  }

  const setSelected = () => store.commit('upvote/setSelected', props.section);

  const selected = computed(() => {
    return store.getters['upvote/getSelected']
  });
</script>

<!--
<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import AddUpvote from './AddUpvote.vue';
import Upvote from './Upvote.vue';

export default {
  setup(props) {
    const store = useStore();
    const upvotes = ref(0);

    const onUpvoteAdded = () => {
      upvotes.value++;
    }

    return {
      upvotes,
      onUpvoteAdded,
      selected: computed(() => store.getters['upvote/getSelected']),
      setSelected: () => store.commit('upvote/setSelected', props.section)
    }
  },

  props: {
    section: Number
  },

  components: {
    AddUpvote,
    Upvote
  }
}
</script>
-->

<style>
  section {
    display: flex;
    align-items: center;
    margin: 30px 20px;
  }

  .upvote-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: 1;
    min-height: 56px;
    padding: 6px;
    border: 2px solid #d9dee2;
    border-radius: 12px;
  }
</style>