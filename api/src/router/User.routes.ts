import express, {Request, Response} from 'express';
import Users from '../model/User';
import {genSalt, compare, hash} from 'bcrypt';

const router = express.Router();

// Get user
router.get('/Api/Get/:id', async (req: Request, res: Response) => {
    try{
        await Users.findById(req.params.id)
            .then(user => {
                const data = {
                    username: user?.username,
                    email: user?.email,
                    image: user?.image
                }
                res.status(200).json(data)
            }).catch(err => {
                res.status(404).json({msg: "user not found"})
            })
    }catch(err){
        res.status(500).json(err)
    }
})

// Update user


// Delete user
router.delete('/Api/Delete/:id', async (req: Request, res: Response) => {
    try{
        if(req.params.id === req.body.userId){
            await Users.findByIdAndDelete(req.params.id)
            .then(() => {
                res.status(200).json({msg: "user deleted"})
            })
        }else{
            res.status(403).json({msg: "User Not Find"})
        }
        
    }catch(err){
        res.status(500).json(err)
    }
})

export default router;