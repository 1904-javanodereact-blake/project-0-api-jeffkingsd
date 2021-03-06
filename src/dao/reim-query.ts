import { db } from './pgp-init';
import { convertSqlReim } from '../util/sql-reim-converter';
const PQ = require('pg-promise').ParameterizedQuery;

// Finding StatusId joining two tables to grab the reimbursement full information
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

// Finding the authorId of the reimbursement includes their ers_user info and ers_reim info
export async function findingAuthorId(authorId: number) {
    const findAuthorInfo = new PQ(`SELECT T1.Reimbursement_id, T1.amount, T1.date_submitted, T1.author, T1.date_resolved, T1.description, T1.status, T1.type, T1.full_name, T2.resolver_name FROM (SELECT Reimbursement_id, amount, author, date_submitted, date_resolved, description, resolver, status, type, CONCAT(firstName, ' ', lastName) AS full_name FROM ers_reim INNER JOIN ers_user ON ers_reim.author = ers_user.user_id INNER JOIN ers_reim_status USING(status_id) INNER JOIN ers_reim_type USING(type_id)) as T1 RIGHT JOIN (SELECT CONCAT(firstname, ' ', lastname) AS resolver_name, user_id, resolver FROM ers_user INNER JOIN ers_reim ON ers_user.user_id = ers_reim.resolver) AS T2 ON T1.resolver = T2.resolver GROUP BY T1.Reimbursement_id, T1.amount, T1.author, T1.date_submitted, T1.date_resolved, T1.description, T1.status, T1.type, T1.full_name, T2.resolver_name HAVING T1.author = $1;`, [authorId]);

    return await db.many (findAuthorInfo)
    .then (async data => {
        for ( const field in data ) {
                 if ( field === 'date_submitted' ) {
                    const date = new Date(data[field]);
                    const newdate = date.toDateString();
                    data[field] = newdate;
                }
                if ( field === 'date_resolved') {
                    const date = new Date(data[field]);
                    const newdate = date.toDateString();
                    data[field] = newdate;
                }
        }
        return data;
    }).catch (error => {
        console.log('ERROR:', error);
        return undefined;
    });
}

// Grabbing all author's reimbursements
export async function allAuthor() {
    const Authors = new PQ(`SELECT T1.Reimbursement_id, T1.amount, T1.date_submitted, T1.date_resolved, T1.description, T1.status, T1.type, T1.full_name, T2.resolver_name FROM (SELECT Reimbursement_id, amount, date_submitted, date_resolved, description, resolver, status, type, CONCAT(firstName, ' ', lastName) AS full_name FROM ers_reim INNER JOIN ers_user ON ers_reim.author = ers_user.user_id INNER JOIN ers_reim_status USING(status_id) INNER JOIN ers_reim_type USING(type_id)) as T1 RIGHT JOIN (SELECT CONCAT(firstname, ' ', lastname) AS resolver_name, user_id, resolver FROM ers_user INNER JOIN ers_reim ON ers_user.user_id = ers_reim.resolver) AS T2 ON T1.resolver = T2.resolver GROUP BY T1.Reimbursement_id, T1.amount, T1.date_submitted, T1.date_resolved, T1.description, T1.status, T1.type, T1.full_name, T2.resolver_name ORDER BY T1.Reimbursement_id;`);
    return db.many(Authors)
    .then(async data => {
        for ( const field in data ) {
            for (const fieldobj in data[field] ) {
                 if ( fieldobj === 'date_submitted' ) {
                    const date = new Date(data[field][fieldobj]);
                    const newdate = date.toDateString();
                    data[field][fieldobj] = newdate;
                }
                if ( fieldobj === 'date_resolved') {
                    const date = new Date(data[field][fieldobj]);
                    const newdate = date.toDateString();
                    data[field][fieldobj] = newdate;
                }
            }
        }
        return data;
    }).catch(error => {
        console.log('Error:', error);
    });
}
// Deleting a row in the reimbursement database
export async function deletingReim(id: number) {
    const deletereim = new PQ('DELETE FROM ers_reim WHERE reimbursement_id = $1', [id]);

    return await db.none(deletereim)
    .then (data => {
        return data;
    }).catch (error => {
        console.log('ERROR Deleting: ', error);
    });
}

// Submitting a new Reimbursement into the database
export async function submittingReim(bodyobj: any) {
    const createReim = new PQ(`INSERT INTO ers_reim (author, amount, date_submitted, description, resolver, status_id, type_id)
                                    VALUES (${bodyobj.author}, ${bodyobj.amount}, CURRENT_TIMESTAMP, '${bodyobj.description}', 6, 0, ${bodyobj.type});`);

    return await db.none(createReim)
    .then (data => {
        return data;
    }).catch (error => {
        console.log('ERROR Submitting:', error);
    });
}

// Finance Manager should be managing all the resolved tickets.
export async function resolvingReim(bodyobj: any, bodyname: string[]) {
    const bodylist = [];
    for (const field in bodyobj) {
        if (bodyobj[field] !== undefined) {
            bodylist.push(bodyobj[field]);
        }
    }
    for (let i = 0; i < bodyname.length; i++) {
        if ( bodyname[i] === 'date_resolved') {
            bodylist[i] = 'CURRENT_TIMESTAMP';
        }
        const updateReim = new PQ(`UPDATE ers_reim SET ${bodyname[i]} = ${bodylist[i]} WHERE reimbursement_id = ${bodylist[0]};`);
        console.log(updateReim);
        await db.none(updateReim)
           .then (data => {
            console.log('Data as been successfully inputted');
            return data;
        }).catch (error => {
            console.log('ERROR:', error);
        });
    }
}

// Grabbing all the pending claims
export async function getPendingReim() {
    const pendClaim = new PQ('select * from ers_reim where status_id = 0;');
    await db.one(pendClaim)
    .then (data => {
     return data;
 }).catch (error => {
     console.log('ERROR NO CLAIMS:', error);
 });
}