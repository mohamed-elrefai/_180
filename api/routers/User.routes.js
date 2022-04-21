const router = require('express').Router();
const  verifyToken  = require('../config/Auth');
const User = require('../model/User.Model');
const { hash, genSalt } = require('bcrypt');
const update = require('../util/multer');

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
router.put('/Api/Update', verifyToken, update.single('img'), async (req, res) => {
    try{
        const userId = req.user.id;
        const image = req.file.filename
        if(userId){
            const user = await User.findByIdAndUpdate(userId, {
                $set: req.body
            });
            // if Update in password 
            const salt = await genSalt(10);
            const hashPassword = await hash(req.body.password, salt);
            // save new password if it change
            user.password = hashPassword
            
            // add image profile
            user.profilePics = image
            res.status(200).json(user);
        }else{
            res.status(403).json({msg: "You can't update this account"})
        }
    }catch(err){
        res.status(500).json({err})
    }

})

// Delete User
router.delete('/Api/Delete', verifyToken, async (req, res) => {
    try{
        const userId = req.user.id;
        if(userId){
            await User.findByIdAndDelete(userId)
            res.status(200).json({msg: "you delete your account"});
        }else{
            res.status(403).json({msg: "you can't delete this account"});
        }
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router