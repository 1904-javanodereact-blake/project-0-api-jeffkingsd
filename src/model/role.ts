export class Role {
    roleId: number; // primary key
    role: string; // not null, unique

    constructor(roleId = 0, role = '') {
        this.role = role;
        this.roleId = roleId;
    }
}