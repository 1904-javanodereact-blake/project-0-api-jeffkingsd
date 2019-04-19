import express from 'express';
import bodyParser from 'body-parser';
// import { db } from './dao/pgp-init';
import { reimbursementRouter } from './routers/reimbursement-router';
import { userRouter } from './routers/user-router';
import { sessionERSmiddle } from './middlware/security-session';
const ers = express();

// Checking for a successful database connection


// Middlware and Router Endpoints
ers.get('/dummy', ( req, res ) => {
    res.send('HELLO THIS IS A TEST DUMMY');
});

ers.use(bodyParser.json());
ers.use(sessionERSmiddle);
ers.use('/user', userRouter);
ers.use('/reimbursements', reimbursementRouter);

// Open up the connection
ers.listen(8080, () => {
    console.log('Employee Reimbursement System is now Online');
});