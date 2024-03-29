const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  id: Number,
  createdAt: Date,
  content: String,
  userName: String,
});

module.exports = mongoose.model('Comment', commentSchema);
