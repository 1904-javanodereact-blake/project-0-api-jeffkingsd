import express from 'express';
import { authMiddleware } from '../middlware/Security-auth';
import { allUser, findingUserId, updatingUserInfo } from '../dao/user-query';
import { findingUser } from '../dao/user-query';
import { numberSqlUser } from '../util/sql-user-converter';

export const userRouter = express.Router();

// Grabbing all the user's information endpoint calls user-query
userRouter.get('', [authMiddleware(['Admin', 'Finance Manager']), async (req, res) => {
    console.log('Testing if this even works');
    const alluser = await allUser();
    console.log(alluser);
    res.json(alluser);
}]);

// Restricted User ID find. Only User with the correct ID can get their own information calls user-query
userRouter.get('/:id', [authMiddleware(['Admin', 'Finance Manager', 'Employee']), async (req, res) => {
    const user_id  = +req.params.id;
    const user = await findingUserId(user_id);
    if (req.session.user.userId === user_id) {
        res.json(user);
    }
    else if (req.session.user.role.role === 'Admin' || req.session.user.role.role === 'Finance Manager') {
        res.json(user);
    } else {
        res.send('You do not have permission to view other people id' + 404);
    }
}]);

// Logging in System
userRouter.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await findingUser(username, password);
    if (user) {
        req.session.user = user;
        console.log(req.session.user);
        console.log(`Username: ${username} has been accepted`);
        console.log('Password: * has been accepted');
        res.sendStatus(200);
    } else {
        console.log(`Username: ${username} has been denied`);
        console.log('Password: * has been denied');
        res.sendStatus(401);
    }
});

// Updating the user. Calls user-query
userRouter.patch('', [authMiddleware(['Admin']), async (req, res) => {
    const { body } = req;
    if (!body.userId) {
        console.log(body.userId);
        res.send('UserId does not exist');
    } else {
        const user = await findingUserId(body.userId);
        const bodyname = numberSqlUser(Object.keys(body));
        const bodyvalue = [];
        for (const field in user ) {
            if (body[field] !== undefined) {
                bodyvalue.push(body[field]);
            }
        }
        updatingUserInfo(bodyname, bodyvalue, body.userId);
    }
}]);