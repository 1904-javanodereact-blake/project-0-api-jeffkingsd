import express from 'express';
import { Users } from '../model/user-info';
import { authMiddleware } from '../middlware/Security-auth';

export const loginRouter = express.Router();

loginRouter.post('', authMiddleware(['Finance Manager']), (req, res) => {
    const {username, password} = req.body;
    const user = Users.find(loginU => loginU.username === username && loginU.password === password);
    console.log('Testing if login works!');
    if (user) {
       // req.session.user = user;
        res.end(201);
    } else {
        res.sendStatus(401);
    }

});

