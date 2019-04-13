import { SqlERSRole } from '../dto/sql-ers-role';
import { Role } from '../model/role';


export function convertSqlRole(role: SqlERSRole) {
    return new Role(role.role_id, role.role_name);

}