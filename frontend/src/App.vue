<template>
  <div id="app">
    <Comment msg="Welcome to Your Vue.js App" />
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </div>
  </div>
</template>

<script>
import Comment from './components/Comment.vue';

export default {
  name: 'App',
  components: {
    Comment,
  },
};
</script>

<style>
body {
  background-color: hsl(223, 19%, 93%);
}
</style>
