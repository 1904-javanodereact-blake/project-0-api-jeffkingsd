import express from 'express';
import bodyParser from 'body-parser';
// import { db } from './dao/pgp-init';
import { reimbursementRouter } from './routers/reimbursement-router';
import { userRouter } from './routers/user-router';
import { sessionERSmiddle } from './middlware/security-session';
const ers = express();
const port = process.env['ERS_PORT'] || 8081;

// Middlware and Router Endpoints
ers.get('/dummy', ( req, res ) => {
    res.send('HELLO THIS IS A TEST DUMMY');
});

ers.use(bodyParser.json());
ers.use(sessionERSmiddle);
ers.use('/user', userRouter);
ers.use('/reimbursements', reimbursementRouter);

// Open up the connection
ers.listen(port, () => {
    console.log('Employee Reimbursement System is now Online');
});