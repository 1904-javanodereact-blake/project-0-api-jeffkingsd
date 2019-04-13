import express from 'express';
import bodyParser from 'body-parser';
import { db } from './dao/pgp-init';
import { reimbursementRouter } from './routers/reimbursement-router';
import { userRouter } from './routers/user-router';
import { sessionERSmiddle } from './middlware/security-session';

const ers = express();

// Checking for a successful database connection
db.connect().then(success => {
    success.done();
})
.catch(error => {
    console.log('ERROR:', error.message || error);
});

// Convert the body from a string to JSON format
ers.use(bodyParser.json());

// Adding Sessions for security
ers.use(sessionERSmiddle);

// User router to access all endpoint for user-side
ers.use('/user', userRouter);

// reimbursement router to access all endpoints for reimbursement-system
ers.use('/reimbursements', reimbursementRouter);

// Open up the connection
ers.listen(8080, () => {
    console.log('Employee Reimbursement System is now Online');
});