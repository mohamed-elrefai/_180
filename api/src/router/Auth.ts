import express, {Request, Response} from 'express';
import {genSalt, hash} from 'bcrypt';
import User from '../model/User.model';
const router = express.Router();

// Register
router.post('/Api/Register', async (req: Request, res: Response) => {
    try{
        const {username, email} = req.body;
        // Hash Password
        const salt = await genSalt(10);
        const password = await hash(req.body.password, salt);

        const newUser = await new User({username, email, password});
        const user = await newUser.save();
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

export default router;