const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const replySchema = new Schema({
  id: Number,
  replyTo: Number,
  createdAt: Date,
  content: String,
  userName: String,
});

module.exports = mongoose.model('Reply', replySchema);
