import express, {Request, Response} from 'express';
import Users from '../model/User';
import TokenUserIdById from '../util/JWT';
import {genSalt, compare, hash} from 'bcrypt';

const router = express.Router();

// Register
router.post('/Api/SignUp', async (req: Request, res: Response) => {
    try{
        // Hash Password
        const salt = await genSalt(10);
        const hashPassword = await hash(req.body.password, salt);
        const password = hashPassword;

        // Push data
        const data = {
            username: req.body.username, 
            email: req.body.email, 
            password
        }
        
        const newUser = await new Users(data)
        const user = await newUser.save();

        // Token Section
        const token = TokenUserIdById(user._id);
        res.cookie("Dark", token, {httpOnly: true});

        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

// Login
router.post('/Api/SignIn', async (req: Request, res: Response) => {
    try{
        const data = {
            email: req.body.email, 
            password: req.body.password
        }
        const user = await Users.findOne({email: data.email})
        if(!user) return res.status(404).json({msg: "user email not found"});

        const getPassword = await compare(data.password, user.password);
        if(!getPassword) return res.status(400).json("wrong password")

        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
    }
})


export default router;