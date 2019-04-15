import { SqlERSRole, RevSqlERSRole } from '../dto/sql-ers-role';
import { Role } from '../model/role';

// Function to convert SQL Role format into server format.
export function convertSqlRole(role: SqlERSRole) {
    return new Role(role.role_id, role.role_name);
}

// Function to reverse convert SQL Role format into server format.
export function revConvertSqlRole(revrole: RevSqlERSRole) {
    return new Role(revrole.role_id, revrole.role_name);
}