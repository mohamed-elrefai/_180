const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../model/User');

module.exports = function(passport){
passport.use(new FacebookStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL,
    profileFields: ['id', 'displayName', 'name', 'email', 'picture.type(large)']
},
    (token, refreshToken, profile, done) => {
        process.nextTick(() => {
            User.findOne({ 'uid' : profile.id }, function(err, user) {
                if (err) throw err;

                    if (user) {
                        return done(null, user);
                    } else {
                        const newUser = new User();
        
                        newUser.uid    = profile.id;                   
                        newUser.token = token;                    
                        newUser.name  = profile.name.givenName + ' ' + profile.name.familyName;
                        newUser.email = profile.emails[0].value;
                        newUser.gender = profile.gender
                        newUser.pic = profile.photos[0].value
                        newUser.save(function(err) {
                            if (err) throw err;
                        
                            return done(null, newUser);
                        });
                }
            });
        })
    }));
    
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}