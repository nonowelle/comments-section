const db = require('../models/comment.js');
const Comment = db.comment;

// Create and Save a new Tutorial
exports.create = (req, res) => {};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Comment.find()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        messahe:
          err.message || 'Some error occured while retriving the comments.',
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Comment.deleteMany({}).then((data) => {
    res.send({
      message: `${data.deletedCount} comments were deleted successfully!`,
    });
  });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
