import express from 'express';
import { userRouter } from './routers/user-router';
import bodyParser from 'body-parser';
import { reimbursementRouter } from './routers/reimbursement-router';
import { loginRouter } from './routers/login-router';
import { db } from './database/pgp-init';

const ers = express();

db.connect().then(obj => {
    obj.done();
})
.catch(error => {
    console.log('ERROR:', error.message || error);
});

ers.use(bodyParser.json());

ers.use('/login', loginRouter);
ers.use('/user', userRouter);
ers.use('/reimbursements', reimbursementRouter);

ers.listen(8080, () => {
    console.log('Employee Reimbursement System is now Online');
});