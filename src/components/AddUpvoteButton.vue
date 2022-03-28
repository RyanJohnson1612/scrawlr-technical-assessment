<template>
  <button @click="$emit('upvoteAdded')" class="add-upvote">
    <img src="../assets/plus.svg" alt="plus sign">
  </button>
</template>

<script setup>
  const emit = defineEmits(['upvoteAdded']);
</script>

<style>
  .add-upvote {
    margin-left: 20px;
    padding: 12px;
    border: 0;
    border-radius: 12px;
    background: #f4f6f8;
    line-height: 0;
  }

  .add-upvote:hover {
    background: #e3e3e3;
    cursor: pointer;
  }
</style>