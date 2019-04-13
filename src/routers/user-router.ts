import express from 'express';
import { authMiddleware } from '../middlware/Security-auth';
import { allUser } from '../dao/user-query';
import { findingUser } from '../dao/user-query';

export const userRouter = express.Router();

userRouter.get('', [authMiddleware(['Admin', 'Finance Manager']), async (req, res) => {
    console.log('Testing if this even works');
    const alluser = await allUser();
    console.log(alluser);
    res.json(alluser);
}]);

userRouter.get('/:id', [authMiddleware(['Admin', 'Finance Manager']), (req, res) => {

}]);


userRouter.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await findingUser(username, password);

    if (user) {
        req.session.user = user;
        console.log(`Username: ${username} has been accepted`);
        console.log('Password: * has been accepted');
        res.json(user);
    } else {
        console.log(`Username: ${username} has been denied`);
        console.log('Password: * has been denied');
        res.sendStatus(401);
    }
});

userRouter.patch('', [authMiddleware(['Admin']), (req, res) => {
    const { body } = req; // Destructuring
    const user = 
}]);