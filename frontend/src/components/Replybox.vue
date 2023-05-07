<template>
  <div class="reply-input-box comment-card">
    <div class="comment-picture">
      <img src="../../../images/avatars/image-juliusomo.png" alt="" />
    </div>
    <input type="text" />
    <button v-on:click="saveReplyAndClose">REPLY</button>
  </div>
</template>

<script>
export default {
  name: 'Reply',
  data() {
    return {
      replies: [],
    };
  },
  props: {
    commentId: Number,
  },

  methods: {
    async findComment() {
      //find the comment by its id
      try {
        const options = {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(
          ` http://localhost:3000/comment/${this.commentId}`,
          options
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    async saveReply() {
      this.findComment();
      // try {
      //   const options = {
      //     method: 'post',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       id: this.replies.length + 1,
      //       content: this.reply.content,
      //       userName: 'nonowelle',
      //       replyTo: this.comment.id,
      //       createdAt: Date.now(),
      //       score: 0,
      //     }),
      //   };
      //   const response = await fetch(
      //     ` http://localhost:3000/comment/${this.comment.id}`,
      //     options
      //   );
      //   console.log(response);
      //   // const data = await response.json();
      // } catch (err) {
      //   console.log(err);
      // }
    },
    saveReplyAndClose() {
      this.$parent.$emit('close');
      this.saveReply();
      // this.closeComment();
    },
  },

  mounted() {
    console.log(this.commentId);
  },
};
</script>

<style lang="scss" scoped>
@import '../variables';
.reply-box {
  max-width: 500px;
  margin-left: auto;
}

.reply-input-box {
  background-color: $white;

  input {
    width: 70%;
    border-radius: 8px;
    padding: 15px;
    border: 1px solid $moderate-blue;
    cursor: pointer;
    color: $dark-blue;
    font-size: 16px;

    &:active,
    &:focus {
      border: 1px solid $moderate-blue;
      background-color: $very-light-gray;
      outline: none;
    }
  }
  button {
    background-color: $moderate-blue;
    color: $white;
    border-radius: 8px;
    border: none;
    padding: 20px;
    cursor: pointer;
    height: 40px;

    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:active {
      background-color: $light-grayish-blue;
    }
  }
}
.comment-picture {
  img {
    width: 40px;
    height: auto;
  }
}
</style>
