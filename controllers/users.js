var passport = require("passport");

var complimentsController = {
  index: function(req, res){
    res.render("views/index.hbs", {users:[]});
  }
};


// GET /signup
function getSignup(request, response) {
  response.render("signup.hbs", { message: request.flash('signupMessage') });
}

// POST /signup
function postSignup(request, response) {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
  });
  return signupStrategy(request, response);
}


// POST/ index
function getIndex(request, response){

}

// GET /login
function getLogin(request, response) {
  response.render('login.hbs', { message: request.flash('loginMessage') });
}

// POST /login
function postLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
  });
  return loginProperty(request, response);
}

// GET /logout
function getLogout(request, response) {
  request.logout();
  response.redirect('/');
}



// Restricted page
function secret(request, response){
  response.render("secret.hbs");
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret,
  getIndex: getIndex
};
