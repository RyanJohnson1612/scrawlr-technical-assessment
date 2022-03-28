<template>
  <UpvoteContainer :section="1"/>
  <UpvoteContainer :section="2"/>
  <UpvoteContainer :section="3"/>
</template>

<script>
import Upvote from './components/Upvote.vue';
import UpvoteContainer from './components/UpvoteContainer.vue';

export default {
  name: 'App',
  components: {
    Upvote,
    UpvoteContainer
  }
}
</script>
