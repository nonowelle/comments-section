<template>
  <div id="app">
    <Comments
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor</a
      >. Coded by <a href="#">Marie-Eve Noel</a>.
    </div>
  </div>
</template>

<script>
import Comments from './components/Comments.vue';
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      comments: [],
    };
  },
  components: {
    Comments,
  },

  methods: {
    async getComments() {
      try {
        const response = await axios.get('http://localhost:3000/');
        this.comments = response.data;
        console.log(this.comments);
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getComments();
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

  width: 100%;
}
</style>
