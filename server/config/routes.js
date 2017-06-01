var Users = require('../controllers/users');
var Items = require('../controllers/items');

module.exports = function(app){
  app.get('/users', Users.index);
  app.post('/users', Users.create);
  app.get('/users/:id', Users.show);
  app.get('/items', Items.index);
  app.post('/items', Items.create);
  app.post('/sessions', Users.login);
}
