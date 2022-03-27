const router = require('express').Router();
const passport = require('passport');
const {maxAge, CreateCookieUserId, CreateCookieUsername} = require('../utils/JWT');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/AuthConfig');
const bcrypt = require('bcrypt');

// Get register & login
router.get('/signIn', forwardAuthenticated, (req, res) => res.render('login'))
router.get('/signUp', forwardAuthenticated, (req, res) => res.render('register'))

// Register


// Login


// FaceBook Section

router.get('/LoginFacebook',
        passport.authenticate('facebook', {
            successRedirect : '/',
            failureRedirect : '/signIn'
        })
);

// LogOut
router.get('/Logout', (req,res)=>{
    req.logout();
    res.redirect('/signIn');
})

module.exports = router;