import { db } from './pgp-init';
import { convertSqlRole } from '../util/sql-role-converter';
import { convertSqlUser } from '../util/sql-user-converter';
const PQ = require('pg-promise').ParameterizedQuery;

// Creating login Credential
export async function findingUser(username: string, password: string) {
    const findUser = new PQ(`SELECT * FROM ers_user INNER JOIN ers_role USING (role_id) WHERE username = $1 AND user_password = $2;`);
    return await db.one(findUser, [username, password])
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
    return await db.many(allUser)
    .then(data => {
        return data;
    }).catch(error => {
        console.log('ERROR:', error);
    });
}

// Finding User Id
export async function findingUserId(userId: number ) {
    if (userId) {
        const findUserId = new PQ(`SELECT * FROM ers_user INNER JOIN ers_role USING (role_id) WHERE user_id = $1;`, [userId]);
        return await db.one(findUserId)
        .then(data => {
            const role = data;
            const convertedUser = convertSqlUser(role);
            convertedUser.role = convertSqlRole(role);
            return convertedUser;
        }).catch(error => {
            console.log('ERROR:', error);
        });
    } else {
    return console.log('ERROR: userid not found');
    }
}

// Submitting a new User into the database
export async function submittingUser(bodyobj: any) {
    const createUser = new PQ(`INSERT INTO ers_user (username, user_password, firstname, lastname, email, role_id) VALUES ('${bodyobj.username}','${bodyobj.user_password}','${bodyobj.firstname}','${bodyobj.lastname}', '${bodyobj.email}', 3)`);
    console.log(createUser);
    return await db.none(createUser)
    .then (data => {
        return data;
    }).catch (error => {
        console.log('ERROR Submitting:', error);
    });
}

// Updating User's Information on the database from the request http client.
export async function updatingUserInfo(userdata: string[], userdatav: string[], userid: number) {
    for (let i = 0; i < userdata.length; i++) {
        const addUserinfo = new PQ(`UPDATE ers_user SET ${userdata[i]} = '${userdatav[i]}' WHERE user_id = ${userid}`);
        await db.none(addUserinfo)
            .then(data => {
            // User date is being updated. Pull information from here.
            }).catch(error => {
            console.log('ERROR:', error);
        });
    }
return console.log(`Data has been successfully inputted`);
}