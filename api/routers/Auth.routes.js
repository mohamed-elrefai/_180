const router = require('express').Router();
const { hash, compare, genSalt } = require('bcrypt');
const { CreateTokenUserIdAndEmail, CreateCookieByUsername, maxAge } = require('../util/jwt');
const User = require('../model/User.Model');
const multer = require('../util/multer');
const cloudinary = require('../util/Upload');

// Register
router.post('/Api/Register', multer.single('img'),async (req, res) => {
    try{
        const { username, email } = req.body;
        const image = await cloudinary.uploader.upload(req.file.path);
        const profilePics = image.url
        // Hash password
        const salt = await genSalt(10);
        const hashPassword = await hash(req.body.password, salt);
        const password = hashPassword;

        // insert data
        const user = await new User({username, email, password, profilePics});
        const newUser = await user.save();
        // Creat Token
        const token = CreateTokenUserIdAndEmail(user.id, user.email);
        // Save token in database
        user.token = token;

        // Create cookie by username
        const tokenCreate = CreateCookieByUsername(user.username);
        res.cookie('__Sett', tokenCreate, {httpOnly: true, maxAge: maxAge * 1000}); // cookie about user => ( username )
        res.cookie('__LUX', token, {httpOnly: true}); // Cookie about user => ( id && email )

        res.status(200).json(user)

    }catch(err){
        res.status(500).json(err)
    }
})

// Login
router.post('/Api/Login', async (req, res) => {
    try{
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if(!user) return res.status(403).json({msg: "user email not founded"});

        const verifyPassword = await compare(password, user.password); 
        if(!verifyPassword) return res.status(403).json({msg: "user password not founded"});

        if(user && verifyPassword){
            // Creat Token
            const token = CreateTokenUserIdAndEmail(user.id, email);
            // save user token
            user.token = token;
            // user
            res.status(200).json(user);
        }
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router