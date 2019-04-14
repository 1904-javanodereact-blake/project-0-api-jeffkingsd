import { SqlERSRole, RevSqlERSRole } from '../dto/sql-ers-role';
import { Role } from '../model/role';

export function convertSqlRole(role: SqlERSRole) {
    return new Role(role.role_id, role.role_name);
}
export function revConvertSqlRole(revrole: RevSqlERSRole) {
    return new Role(revrole.role_id, revrole.role_name);
}