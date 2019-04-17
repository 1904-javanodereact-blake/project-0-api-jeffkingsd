import express from 'express';
import { authMiddleware } from '../middlware/Security-auth';
import { findingStatusId, findingAuthorId, submittingReim, resolvingReim } from '../dao/reim-query';
import { numberReim } from '../util/sql-reim-converter';

export const reimbursementRouter = express.Router();

// Grabbing the statusID which calls the reim-query
reimbursementRouter.get('/status/:statusid', [authMiddleware(['Admin', 'Finance Manager']), async (req, res) => {  // Finance-manager has access to this only (+ admin).
    const statusid: number = +req.params.statusid;
    const data = await findingStatusId(statusid);
    if (findingStatusId) {
        console.log('Query results has been found');
        res.json(data);
    } else {
        console.log('Status has not been found');
        res.sendStatus(404);
    }
}]);

// Grabbing the userId which calls the reim_query
reimbursementRouter.get('/author/userId/:userId', [authMiddleware(['Admin', 'Finance Manager']), async (req, res) => {
    const authorid = +req.params.userId;
    if (authorid) {
        const authorinfo = await findingAuthorId(authorid);
        console.log (authorinfo);
        if (req.session.user.userId === authorid) {
            res.json(authorinfo);
        } else if ( req.session.user.role.roleId === 1 || req.session.user.role.roleId === 2) {
            res.json(authorinfo);
        } else {
            res.send('You do not have permission to view other person reimbursement status.');
        }
    }
}]);

// Creating new Reimbursement which calls the reim_query
reimbursementRouter.post('', async (req, res) => {
    const { body } = req;
    console.log(body);
    if (!body.author) {
        console.log('No information detected');
    } else {
        await submittingReim(body);
    }
});

// Updating current Reimbursement which calls the reim_query
reimbursementRouter.patch('', [authMiddleware(['Admin', 'Finance Manager']), async (req, res) => {
    const { body } = req;
    if (!body) {
        console.log('No information detected');
    } else {
        const bodynames = Object.keys(body);
        const convertnames = numberReim(bodynames);
        await resolvingReim(body, convertnames);
    }
}]);
