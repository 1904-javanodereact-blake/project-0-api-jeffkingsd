import { db } from './pgp-init';
import { convertSqlRole } from '../util/sql-role-converter';
import { convertSqlUser } from '../util/sql-user-converter';
const PQ = require('pg-promise').ParameterizedQuery;

// Creating login Credential
export async function findingUser(username: string, password: string) {
    const findUser = new PQ(`SELECT * FROM ers_user INNER JOIN ers_role USING (role_id) WHERE username = $1 AND user_password = $2;`);

return db.one(findUser, [username, password])
    .then(data => {
        const role = data;
        const convertedUser = convertSqlUser(role);
        convertedUser.role = convertSqlRole(role);
        return convertedUser;

    }).catch(error => {
        console.log('ERROR:', error);
    });
}

// Grabbing all the user from the ers_user table
export async function allUser() {
    const allUser = new PQ('SELECT * FROM ers_user;');
    return db.many(allUser)
    .then(data => {
        return data;
    }).catch(error => {
        console.log('ERROR:', error);
    });
}

export async function findingUserId(userId: number ) {
    const findUser = new PQ(`SELECT * FROM ers_user WHERE user_id= $1;`);

return db.one(findUser, [userId])
    .then(data => {
        const role = data;
        const convertedUser = convertSqlUser(role);
        convertedUser.role = convertSqlRole(role);
        return convertedUser;

    }).catch(error => {
        console.log('ERROR:', error);
    });
}

