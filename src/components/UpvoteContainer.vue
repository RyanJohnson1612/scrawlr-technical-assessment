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
    <AddUpvoteButton @upvoteAdded="onUpvoteAdded()" />
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';
  import AddUpvoteButton from './AddUpvoteButton.vue';
  import Upvote from './Upvote.vue';

  const store = useStore();
  const upvotes = ref(0);

  const props = defineProps({
    section: Number
  });

  // Increment upvotes when upvoteAdded is emitted
  const onUpvoteAdded = () => {
    upvotes.value++;
  }

  // Update selected state in store when upvoteSelected is emitted
  const setSelected = () => store.commit('upvote/setSelected', props.section);

  // Get selected state from store
  const selected = computed(() => {
    return store.getters['upvote/getSelected']
  });
</script>

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