// const mongoose = require('mongoose');
// const express = require('express');
const bodyParser = require('body-parser');
// const path = __dirname + '/views/';
// app.use(express.static(path));
// app.use(express.json());

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const Comment = require('../backend/models/comment.js');
const Reply = require('../backend/models/reply.js');

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
app.use(bodyParser.json());

app.get('/comment', async (req, res) => {
  const comments = await Comment.find();
  res.status(200).send(comments);
});

app.get('/comment/:id', async (req, res) => {
  // const comments = await Comment.findOneAndUpdate({
  //   query: { id: req.id },
  //   update: { replies: req.body },
  // });
  res.status(200).send('WORKING');
});

app.post('/comment', async (req, res) => {
  console.log(req);
  const body = req.body;
  const message = new Comment(body);
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a comment',
    });
  }
  message
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        message: 'Comment created!',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: 'Comment not created!',
      });
    });
});

app.post('/comment/:id', async (req, res) => {
  console.log(req.body);
  // const comments = await Comment.findOneAndUpdate({
  //   query: { id: req.id },
  //   sort: { rating: 1 },
  //   update: { replies: req.body },
  // });
  // const body = req.body;
  // const message = new Reply(body);
  // if (!body) {
  //   return res.status(400).json({
  //     success: false,
  //     error: 'You must provide a comment',
  //   });
  // }
  // comments
  //   .save()
  //   .then(() => {
  //     return res.status(201).json({
  //       success: true,
  //       message: 'Reply created!',
  //     });
  //   })
  //   .catch((error) => {
  //     return res.status(400).json({
  //       error,
  //       message: 'Reply not created!',
  //     });
  //   });
  res.send('YOUR ROUTE WORKS');
});

app.listen(port, () => {
  console.log(`Server is running on port${port}`);
});
