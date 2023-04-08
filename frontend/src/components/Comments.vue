<template>
  <div>
    <div class="comment-card">
      <div class="comment-vote">
        <div class="comment-vote-cta">
          <div class="plus" v-on:click="addVote">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
              />
            </svg>
          </div>
          <div class="vote-number">{{ score }}</div>
          <div class="minus" v-on:click="removeVote">
            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="comment-content">
        <div class="comment-infos">
          <div class="comment-picture info">
            <img src="../../../images/avatars/image-juliusomo.png" alt="" />
          </div>
          <div class="comment-author info">{{ comment.user.userName }}</div>
          <div class="comment-date info">{{ comment.createdAt }}</div>
          <div class="comment-reply-cta info" v-on:click="openReplyBox">
            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                fill="#5357B6"
              />
            </svg>
            Reply
          </div>
        </div>
        <div class="comment-text">
          {{ comment.content }}
        </div>
      </div>
    </div>
    <div class="reply-box comment-card" v-if="replyBoxIsOpened">
      <div class="comment-picture">
        <img src="../../../images/avatars/image-juliusomo.png" alt="" />
      </div>
      <input type="text" v-model="reply.content" />
      <button v-on:click="saveCommentAndClose">REPLY</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Comment',
  props: {
    comment: Object,
  },
  data: function () {
    return {
      replyBoxIsOpened: false,
      score: null,
      reply: {
        id: Number,
        content: '',
        createdAt: '',
        score: 0,
        // replyingTo: this.comment.user.userName,
        user: {
          userName: '',
        },
      },
    };
  },

  methods: {
    openReplyBox() {
      this.replyBoxIsOpened = true;
    },
    async saveComment() {
      try {
        const reply = await axios.post('http://localhost:8080/', {
          comment_content: this.reply.content,
          comment_userName: 'nonowelle',
          comment_replyTo: this.comment.user.userName,
        });
        console.log(reply);
      } catch (err) {
        console.log(err);
      }
    },
    closeComment() {
      this.replyBoxIsOpened = false;
    },
    saveCommentAndClose() {
      this.saveComment();
      this.closeComment();
    },
    addVote() {
      if (this.comment.score === this.score) {
        this.score = this.score + 1;
      }
    },
    removeVote() {
      if (this.score === this.comment.score + 1) {
        this.score = this.score - 1;
      }
    },
  },
  mounted() {
    this.score = this.comment.score;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../variables';
.comment-card {
  display: flex;

  background-color: $white;

  padding: 32px;
  max-width: 650px;
  border-radius: 8px;
  margin-bottom: 12px;

  gap: 24px;
}
.comment-vote {
  width: 90px;

  align-content: center;
  display: flex;

  flex-wrap: wrap;

  &-cta {
    height: 80px;
    width: 40px;

    background-color: $light-gray;
    border-radius: 8px;

    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    display: flex;
  }

  .plus,
  .minus {
    cursor: pointer;

    path {
      transition: all 300ms ease;
    }

    &:hover {
      path {
        fill: $moderate-blue;
      }
    }
  }
  .plus,
  .vote-number,
  .minus {
    height: 30%;
    text-align: center;

    align-content: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  .vote-number {
    color: $moderate-blue;
    font-weight: 600;
  }
}
.comment-infos {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.info {
  margin-right: 24px;

  &:last-of-type {
    margin-right: 0;
    justify-self: flex-end;
    flex-grow: 1;
    text-align: end;
  }
}
.comment-picture {
  img {
    width: 40px;
    height: auto;
  }
}

.comment-author {
  color: $dark-blue;
  font-weight: 700;
}

.comment-date {
  color: $grayish-blue;
}
.comment-reply-cta {
  color: $moderate-blue;
  font-weight: 700;
  cursor: pointer;

  &:active {
    color: $light-grayish-blue;
    path {
      fill: $light-grayish-blue;
    }
  }
  svg {
    margin-right: 10px;
  }
}
.comment-text {
  color: $grayish-blue;
}

.reply-box {
  background-color: $white;

  input {
    width: 70%;
    border-radius: 8px;
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
    &:active {
      background-color: $light-grayish-blue;
    }
  }
}
</style>
