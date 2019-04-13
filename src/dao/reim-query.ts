import { db } from './pgp-init';

const PQ = require('pg-promise').ParameterizedQuery;

export async function findingStatusId(statusId: number) {
    if (statusId  > -1 && statusId < 3) {
    const findStatus = new PQ('SELECT * from ers_reim_status INNER JOIN ers_reim USING (status_id) WHERE status_id = $1;', [statusId]);
        return db.one(findStatus)
        .then (data => {
            console.log(data);
        }).catch (error => {
            console.log('ERROR:', error);
        });
    } else {
        return console.log('ERROR: STATUS ID IS OUT OF BOUNDS');
    }
}
