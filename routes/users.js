var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/signup', function (req, res, next) {
   res.render('signup');
});
router.post('/signup',passport.authenticate('local-signup', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/signup'
}));

router.get('/profile',function (req,res,next) {
   res.render('profile');
});
router.get('/signin', function (req, res, next) {
    res.render('signin');
});

//TODO ROUTEAMENTO DIRECCIONADO COM O LOGIN
router.get('/login',function (req,res,next) {
    res.render('login');
});
router.post('login',passport.authenticate('local_login', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/login'
}));


module.exports = router;
