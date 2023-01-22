const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cors = require('cors');
const Comment = require('./models/comment');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', true);
mongoose
  .connect('mongodb://127.0.0.1:27017/commentSection')
  .then(() => {
    console.log('DB CONNECTION OPEN');
  })
  .catch((err) => {
    console.log('Oh no! Error!');
    console.log(err);
  });

app.get('/', async (req, res) => {
  const comments = await Comment.find({});
  console.log(comments);
  res.json(comments);
});
app.post('/', async (req, res) => {
  console.log(req.body);
  //trouver a quel comment on repond
  //ajouter un object dans le array replies de ce comment
  //save the reply
});
app.listen(3000, () => {
  console.log('APP IS LISTENING ON PORT 3000');
});
