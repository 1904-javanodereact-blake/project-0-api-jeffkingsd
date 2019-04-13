import { db, pgp } from './pgp-init';
const table = new pgp.helpers.TableName('ers_user', 'Employee_Reimbursement_System');
const PS = require('pg-promise').PreparedStatement;

const findUser = new PS('find-user', 'SELECT * FROM ers_user;');
const addUser = '';


db.one(findUser).then(user => {
    // User has been found
}).catch(error => {
    // Oh no an Error
});
