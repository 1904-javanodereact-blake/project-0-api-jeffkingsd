import { number } from "prop-types";

export class Role {
    role: string;
    roleId: number;

        constructor(role='', roleId=0) {
            this.role = role;
            this.roleId = roleId;
        }
}