var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var User = mongoose.model('User');

module.exports = {
  //find all items
  index: function(req, res){
    Item.find({}, function(err, items){
      if(err){
        return res.json(err);
      }
      return res.json(items);
    })
  },
  //create new item for bucket list
  create: function(req, res){
    Item.create(req.body, function(err, item){
      if(err){
        return res.json(err)
      }
      User.findByIdAndUpdate(req.body.creator, { $push: { items: item._id }}, function(err, user){
        if(err){
          return res.json(err)
        }
          User.findByIdAndUpdate(req.body.user, { $push: { items: item._id }}, function(err, user){
            if(err){
              return res.json(err)
            }
              return res.json(item)
          })
        })
    })
  }
}
