const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const auth = require('./routers/Auth');
const {ensureAuthenticated,forwardAuthenticated} = require('./config/AuthConfig')
require('dotenv').config();
// if user insert email & password
require('./config/PassportLocal')(passport);
// if user login with facebook
require('./config/passportFaceboock')(passport);


// Connect Database
const port = process.env.PORT;
mongoose.connect(process.env.MongoDB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        app.listen(port, () => {
            console.log(process.env.URLSite);
        })
    }).catch(err => console.log(err));

// Middleware
require('./middleware/app')(app, passport)

// Router
app.use(auth)

app.get('/',ensureAuthenticated, (req, res)=>{
    res.render('index', {user: req.user})
})