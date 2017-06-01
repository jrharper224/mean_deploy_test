var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title cannot be left blank'],
    minlength: [5, 'Title must be at least 5 characters']
  },
  description: {
    type: String,
    required: [true, 'Description cannot be left blank'],
    minlength: [10, 'Description must be at least 10 characters']
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

mongoose.model('Item', ItemSchema);
