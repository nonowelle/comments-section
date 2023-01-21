<template>
  <div id="app">
    <Comment msg="Welcome to Your Vue.js App" />
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor</a
      >. Coded by <a href="#">Marie-Eve Noel</a>.
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 90px;

  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  line-height: 24px;
}

.attribution {
  position: absolute;
  top: 90%;

  display: flex;
  justify-content: center;

  width: 50%;
}
</style>
