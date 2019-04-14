import { db } from './pgp-init';

const PQ = require('pg-promise').ParameterizedQuery;

export async function findingStatusId(statusId: number) {
    if (statusId  > -1 && statusId < 3) {
    const findStatus = new PQ('SELECT * from ers_reim_status INNER JOIN ers_reim USING (status_id) WHERE status_id = $1 ORDER BY date_submitted;', [statusId]);
return await db.one(findStatus)
        .then (data => {
            return data;
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
        return data;
    }).catch (error => {
        console.log('ERROR:', error);
    });
}
