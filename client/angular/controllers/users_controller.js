app.controller('UsersController', function(UserFactory, $cookies, $location, ItemFactory){
  console.log('initializing UsersController...');
  var self = this;
  self.current_user = {};

  self.session = function(){
    UserFactory.session(function(user){
      console.log('user:', user);
      if(user){
        self.current_user = user;
      } else {
        $location.url('/');
      }
    })
  }
  self.logout = function(){
    $cookies.remove('user_id');
    $location.url('/');
  }
  self.login = function(loginUser){
    UserFactory.login(loginUser, function(res){
    $cookies.put('user_id', res.data._id);
    $location.url('/dashboard');
    })
  }
  self.create = function(newUser){
    console.log('newUser', newUser);
    UserFactory.create(newUser, function(res){
      var user_id = res.data._id;
      $cookies.put('user_id', res.data._id);
      $location.url('/dashboard');
    })
  }
  self.createItem = function(newItem){
    ItemFactory.create(newItem, function(res){
      self.index()
    })
  }
  self.itemIndex = function(){
    ItemFactory.index(function(res){
      self.items = res.data;
    })
  }
  self.index = function(){
    UserFactory.index(function(res){
      self.users = res.data
    })
  }
})
