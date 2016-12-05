/**
 * Created by diogo on 28/11/2016.
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

passport.use('local-signup',new LocalStrategy(function (username,password,done) {
    User.findOne({username : username},function (err,user) {
        if(user != null){
            return done(null,false);
        }else{
            var NovoUser = new User();
            NovoUser.email = username;
            NovoUser.password = password;
            NovoUser.save(function (err) {
                if(err){
                    return done(err);
                }else{
                    return done(null,NovoUser);
                }

            });
        }

    });

}));




