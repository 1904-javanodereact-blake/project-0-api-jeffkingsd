import { Reimbursements } from '../model/reimbursement-info';
import { Reimbursementstatuses } from '../model/reimbursement-info';
// import {Reimbursementtypes} from '../model/reimbursement-info';
import express from 'express';

export const reimbursementRouter = express.Router();
// console.log(reimbursements);//PLACEHOLDER TO TEST

reimbursementRouter.get('/status/:statusId', (req, res) => {  // Finance-manager has access to this only (+ admin).
    const reimbstatus = Reimbursementstatuses.find(RS => RS.statusId === +req.params.statusId);
    res.json(reimbstatus);// PLACEHOLDER TO TEST
});
reimbursementRouter.get('/author/userId/:userId',(req,res)=> {
    const authorid = Reimbursements.find(AId => AId.author === +req.params.userId);
    if (authorid) {
    res.json(authorid);
    }
    else {
        res.sendStatus(404);
    }
});

reimbursementRouter.post('/Reimbursement', (req, res)=> {

});

reimbursementRouter.patch('/Reimbursement', (req, res)=> {

});