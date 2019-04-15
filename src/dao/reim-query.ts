import { db } from './pgp-init';
import { convertSqlReim } from '../util/sql-reim-converter';

const PQ = require('pg-promise').ParameterizedQuery;

export async function findingStatusId(statusId: number) {
    if (statusId  > -1 && statusId < 3) {
    const findStatus = new PQ('SELECT * from ers_reim_status INNER JOIN ers_reim USING (status_id) WHERE status_id = $1 ORDER BY date_submitted;', [statusId]);
return await db.one(findStatus)
        .then (data => {
            const convertedReim = convertSqlReim(data);
            return convertedReim;
        }).catch (error => {
            console.log('ERROR:', error);
        });
    } else {
        return console.log('ERROR: STATUS ID IS OUT OF BOUNDS');
    }
}

export async function findingAuthorId(authorId: number) {
    const findAuthor = new PQ('SELECT * from ers_reim INNER JOIN ers_user on ers_reim.author = ers_user.user_id WHERE author = $1;', [authorId]);
return await db.one(findAuthor)
    .then (data => {
        const convertedReim = convertSqlReim(data);
        return convertedReim;
    }).catch (error => {
        console.log('ERROR:', error);
    });
}

export async function submittingReim(bodyobj: any) {
    const createReim = new PQ(`INSERT INTO ers_reim (author, amount, date_submitted, description, resolver, status_id, type_id) VALUES (${bodyobj.author}, ${bodyobj.amount}, CURRENT_TIMESTAMP, ${bodyobj.description}, 6, 0, ${bodyobj.type});`);

    return await db.one(createReim)
    .then (data => {
        return data;
    }).catch (error => {
        console.log('ERROR:', error);
    });
}

export async function resolvingReim(bodyobj: any, bodyname: string[]) {

    const bodylist = [];
    for (const field in bodyobj) {
    const bodyvalue = bodyobj[''];
        if (bodyobj[field] !== undefined) {
            bodylist.push(bodyobj[field]);
        }
    }

    for (let i = 0; i < bodyname.length; i++) {
    console.log(bodylist[i]);
    console.log(bodyname[i]);
    if ( bodyname[i] === 'date_resolved') {
    bodylist[i] = 'CURRENT_TIMESTAMP';
    }
    const updateReim = new PQ(`UPDATE ers_reim SET ${bodyname[i]} = ${bodylist[i]} WHERE reimbursement_id = ${bodylist[0]};`);

    await db.one(updateReim)
        .then (data => {
            console.log('Data as been successfully inputted');
            return data;
        }).catch (error => {
            console.log('ERROR:', error);
        });
    }
}