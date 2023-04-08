// const mongoose = require('mongoose');
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = __dirname + '/views/';
// app.use(express.static(path));
// app.use(express.json());
// app.use(bodyParser.json());

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const Comment = require('../backend/models/comment.js');

mongoose.set('strictQuery', false);
const mongoDB = 'mongodb://127.0.0.1:27017/commentSection';

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get('/', async (req, res) => {
  const comments = await Comment.find();
  res.status(200).send(comments);
});

app.listen(port, () => {
  console.log(`Server is running on port${port}`);
});
