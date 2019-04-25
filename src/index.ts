import express from 'express';
import bodyParser from 'body-parser';
import { reimbursementRouter } from './routers/reimbursement-router';
import { userRouter } from './routers/user-router';
import { sessionERSmiddle } from './middlware/security-session';

const ers = express();
const port = process.env['DB_PORT'];

// Grabbing Root Directory //
ers.use((req, resp, next) => {
    console.log(req.get('host'));
    resp.header('Access-Control-Allow-Origin', `${req.headers.origin}`);
    resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    resp.header('Access-Control-Allow-Credentials', 'true');
    resp.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, PATCH');
    next();
 });

// Middlware and Router Endpoints
ers.use(bodyParser.json());
ers.use(sessionERSmiddle);

ers.use('/user', userRouter);
ers.use('/reimbursements', reimbursementRouter);

// Open up the connection
ers.listen(port, () => {
    console.log('Employee Reimbursement System is now Online');
});