import express from 'express';
import { authMiddleware } from '../middlware/Security-auth';
import { findingStatusId, findingAuthorId } from '../dao/reim-query';

export const reimbursementRouter = express.Router();
// console.log(reimbursements);//PLACEHOLDER TO TEST

reimbursementRouter.get('/status/:statusid', [authMiddleware(['Admin', 'Finance Manager']), async (req, res) => {  // Finance-manager has access to this only (+ admin).
    const statusid: number = +req.params.statusid;
    console.log(statusid);
    const data = await findingStatusId(statusid);
    console.log(data);
    if (findingStatusId) {
        console.log('Query results has been found');
        res.json(data);
    } else {
        console.log('Status has not been found');
        res.sendStatus(404);
    }
}]);

reimbursementRouter.get('/author/userId/:userId', [authMiddleware(['Admin', 'Finance Manager']), async (req, res) => {
    const authorid = +req.params.userId;
    if (authorid) {
    const authorinfo = await findingAuthorId(authorid);
    if (req.session.user.userId === authorid) {
    res.send(authorinfo);
    } else if ( req.session.user.role.roleId === 1 || req.session.user.role.roleId === 2) {
        res.send(authorinfo);
    }
    else {
        res.send('You do not have permission to view other person reimbursement status.');
    }
}
}]);

reimbursementRouter.post('/Reimbursement', (req, res) => {

});

reimbursementRouter.patch('/Reimbursement', (req, res) => {

});