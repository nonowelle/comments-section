<template>
  <div id="app">
    <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor</a
      >. Coded by <a href="#">Marie-Eve Noel</a>.
    </div>
  </div>
</template>

<script>
import Comment from './components/Comments.vue';

export default {
  name: 'App',
  data() {
    return {
      comments: [],
    };
  },
  components: {
    Comment,
  },

  methods: {
    async getComments() {
      const options = {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
      fetch('http://localhost:3000', options)
        .then(async (response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.comments = data;
        })
        .catch((err) => console.log('ERROR', err));
    },
  },

  mounted() {
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
