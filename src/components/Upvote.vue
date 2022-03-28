<template>
  <div :class="{ selected: props.selected }" class="upvote" @click="$emit('upvoteSelected')">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 19C9 19.5523 9.44772 20 10 20C10.5523 20 11 19.5523 11 19L9 19ZM10.7071 0.292892C10.3166 -0.0976315 9.68342 -0.0976314 9.29289 0.292892L2.92893 6.65685C2.53841 7.04738 2.53841 7.68054 2.92893 8.07107C3.31946 8.46159 3.95262 8.46159 4.34315 8.07107L10 2.41421L15.6569 8.07107C16.0474 8.46159 16.6805 8.46159 17.0711 8.07107C17.4616 7.68054 17.4616 7.04738 17.0711 6.65685L10.7071 0.292892ZM11 19L11 1L9 1L9 19L11 19Z" fill="#343A40"/>
    </svg>
  </div>
</template>

<script setup>
  const props = defineProps({
    selected: Boolean
  });

  const emit = defineEmits(['upvoteSelected']);

</script>

<style>
  .upvote {
    margin: 6px;
    padding: 12px;
    border-radius: 12px;
    background-color: #F4F6F8;
    line-height: 0;
    cursor: pointer;
  }

  .upvote.selected {
    background-color: #E5E8FD;
  }

  .upvote.selected path {
    fill: #253CF2;
  }
</style>