import { Reimbursements } from '../model/reimbursement-info';
import express from 'express';
import { authMiddleware } from '../middlware/Security-auth';
import { findingStatusId } from '../dao/reim-query';

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

reimbursementRouter.get('/author/userId/:userId', [authMiddleware(['Admin', 'Finance Manager']), (req, res) => {
    const authorid = Reimbursements.find(AId => AId.author === +req.params.userId);
    if (authorid) {
    res.json(authorid);
    }
    else {
        res.sendStatus(404);
    }
}]);

reimbursementRouter.post('/Reimbursement', (req, res) => {

});

reimbursementRouter.patch('/Reimbursement', (req, res) => {

});