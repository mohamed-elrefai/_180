const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const flash = require('connect-flash')

module.exports = (app, passport) => {
    app.set('view engine', 'ejs')
    app.use(morgan('dev'));
    app.use(cors());
    //app.use(helmet());
    app.use(express.urlencoded({extended: true}));
    app.use(express.static('layouts/'));

    // Connect flash
    app.use(flash());
    app.use( // Express session
        session({
            secret: 'agsj2kb34234j23lb4;23hv42jkb4j42h',
            resave: true,
            saveUninitialized: true
        })
    );
    app.use(function(req, res, next) {
        res.locals.success_msg = req.flash('success_msg');
        res.locals.error_msg = req.flash('error_msg');
        res.locals.error = req.flash('error');
        next();
    });
    app.use(passport.initialize());
    app.use(passport.session());
}