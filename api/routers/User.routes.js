const router = require('express').Router();
const  verifyToken  = require('../config/Auth');
const User = require('../model/User.Model');

// get User
router.get('/Api/', verifyToken, async (req, res)  => {
    try{
        const userId = req.user.id;
        const user = await User.findById(userId)
        const { password, updatedAt, ...other } = user._doc;
    
        res.status(200).json(other)
    }catch(err){
        res.status(500).json(err)
    }
})

// Update User


// Delete User


module.exports = router