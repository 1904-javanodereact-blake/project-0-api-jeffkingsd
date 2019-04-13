import express from 'express';
import { Users } from '../model/user-info';

export const userRouter = express.Router();

userRouter.get('/:id', (req, res) => { // Basic but finace Manager only has access to this!
    const id: number = +req.params.id;

    console.log(`User id is ${req.params.id}`);
    const user = Users.find(userfind => userfind.userId === id);
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
});

userRouter.get('',(req,res)=> {
res.json(Users);
});

