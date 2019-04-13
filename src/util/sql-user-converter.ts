import { User } from '../model/user';
import { SqlERSuser } from '../dto/sql-ers-user';

export function convertSqlUser(user: SqlERSuser) {
        return new User( user.user_id, user.username, undefined, user.firstname, user.lastname, user.email);
}