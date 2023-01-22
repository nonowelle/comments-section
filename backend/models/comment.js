const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  id: Number,
  content: String,
  score: Number,
  user: {
    image: {
      png: String,
      webp: String,
    },
    username: String,
  },
  replies: [
    {
      id: Number,
      content: String,
      createdAt: String,
      score: Number,
      replyingTo: String,
      user: {
        image: {
          png: String,
          webp: String,
        },
        username: String,
      },
    },
  ],
});

module.exports = mongoose.model('Comment', commentSchema);
