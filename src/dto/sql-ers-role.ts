export class SqlERSRole {
    role_id = 0;
    role_name = '';
}
export class RevSqlERSRole {
    role_id: number;
    role_name: string;

        constructor(role_id = 0, role_name = '') {
            this.role_id = role_id;
            this.role_name = role_name;
        }
}