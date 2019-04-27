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
    const findAuthorInfo = new PQ('SELECT * FROM ers_reim WHERE author = $1;', [authorId]);

    return await db.one (findAuthorInfo)
    .then (async data => {
        for (const field in data) {
            if (field === 'author') {
                const fullName = await findAuthorName(data[field]);
                data[field] = fullName;
            }
        }
        /* const convertedReim = convertSqlReim(data);
        return convertedReim; */
        return data;
    }).catch (error => {
        console.log('ERROR:', error);
        console.log('ERROR: AuthorId does not exist!');
    });
}

// Grabbing all author's reimbursements
export async function allAuthor() {
    const Authors = new PQ();
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
// Grabbing status ID
export async function findStatusId(statusId: number) {
    const findStatus = new PQ('SELECT status FROM ers_reim_status WHERE status_id = $1;', [statusId]);

    return await db.one(findStatus)
    .then(data => {
        const statusName = [];
        statusName.push(data);
        return statusName[0];
    }).catch(error => {
        console.log('Error:', error);
    });
}
// Finding the author name.
export async function findAuthorName(authorId: number) {
    const findAuthor = new PQ(`SELECT CONCAT(firstname, ' ', lastname) AS full_name FROM ers_user WHERE ers_user.user_id = $1;`, [authorId]);

    return await db.one(findAuthor)
    .then(data => {
        const resolverName = [];
        resolverName.push(data);
        return resolverName[0];
    }).catch(error => {
        console.log('Error:', error);
    });
}

// Submitting a new Reimbursement into the database
export async function submittingReim(bodyobj: any) {
    const createReim = new PQ(`INSERT INTO ers_reim (author, amount, date_submitted, description, resolver, status_id, type_id) VALUES (${bodyobj.author}, ${bodyobj.amount}, CURRENT_TIMESTAMP, ${bodyobj.description}, 6, 0, ${bodyobj.type});`);
    return await db.none(createReim)
    .then (data => {
        return data;
    }).catch (error => {
        console.log('ERROR:', error);
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
        await db.none(updateReim)
           .then (data => {
            console.log('Data as been successfully inputted');
            return data;
        }).catch (error => {
            console.log('ERROR:', error);
        });
    }
}