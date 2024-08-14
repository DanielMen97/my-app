const JwtStrategy = require('passport-jwt').Strategy;
const ExtratJwt = require('passport-jwt').ExtratJwt;
const Keys = require('./keys');
const User = require('../models/user');

module.exports = (passport) => {
    const opts = {};
    opts.jwtFromRequest = ExtratJwt.fromAuthHeaderWithsheme('jwt');
    opts.secretOrKey = Keys.secretOrKey;

    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id, (err, user) => {
            if(err){
                return done(err, false);
            }
            if(user){
                return done(null, user);
            }
            return done(null, false);
        });
    }));
};s