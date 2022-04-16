const router = require('express').Router();
const { hash, compare, genSalt } = require('bcrypt');
const { CreateTokenUserIdAndEmail, CreateCookieByUsername, verifyToken } = require('../util/jwt');
const User = require('../model/User.Model');
// Register
router.post('/Api/Register', async (req, res) => {
    try{
        const { username, email } = req.body;
        // Hash password
        const salt = await genSalt(10);
        const hashPassword = await hash(req.body.password, salt);
        const password = hashPassword;

        // insert data
        const user = await User.create({username, email, password});
        
        // Creat Token
        const token = CreateTokenUserIdAndEmail(user.id, user.email);
        // Save token in database
        user.token = token;

        // Create cookie by username
        const tokenCreate = CreateCookieByUsername(user.username);
        res.cookie('__Sett', tokenCreate, {httpOnly: true}); // cookie about user => ( username )
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