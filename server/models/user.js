var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field cannot be blank"]
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item"
  }]
})

mongoose.model('User', UserSchema);
