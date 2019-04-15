import { RevUser, User } from '../model/user';
import { SqlERSuser, RevSqlERSuser } from '../dto/sql-ers-user';

// Function to convert SQL User SELECT format into server format
export function convertSqlUser(user: SqlERSuser) {
        return new User( user.user_id, user.username, undefined, user.firstname, user.lastname, user.email);
}

// Function to reverse SQL User server format into SQL format
export function reverseconvertSqlUser(revuser: RevUser) {
        return new RevSqlERSuser(revuser.user_id, revuser.username, undefined, revuser.firstname, revuser.lastname, revuser.email);
}

// Function to grab specific worded string to change into SQL format.
export function numberSqlUser( userarr: string[] ) {
        for (let i = 0; i < userarr.length; i++) {
                const word = userarr[i];
                if (word === 'userId') {
                        userarr[i] = 'user_id';
                } else if (word === 'firstName') {
                        userarr[i] = 'firstname';
                } else if (word === 'lastName') {
                        userarr[i] = 'lastname';
                } else if (word === 'role') {
                        userarr[i] = 'role_id';
                } else if (word === 'password') {
                        userarr[i] = 'user_password';
                        console.log(userarr[i]);
                }
        }
        return userarr;
}