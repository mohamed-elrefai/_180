const  router = require('express').Router();
const JWT = require('jsonwebtoken');
const User = require('../model/User');
const {genSalt, hash, compare} = require('bcrypt');

// Token section
const maxAge = 3 * 24 * 60 * 60;
const CreateTokenWithUserID = (id) => {
    return JWT.sign({id}, "MohamedMostafa1999SecrtKy", {expiresIn: maxAge});
}

// Register
router.post('/Api/Register', async (req, res) => {
    try{
        // Hash password
        const salt = await genSalt(10);
        const password = await hash(req.body.password, salt);

        const data = {
            username: req.body.username,
            email: req.body.email,
            password: password,
        }

        const user = await User.create(data);
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

// Login
router.post('/Api/Login', async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email: email})
        if(!user){
            res.status(403).json({msg: 'email error'});
        }
        const passwordFind = await compare(password, user.password);
        if(!password){
            res.status(403).json({msg: 'password error'});
        }
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router