import { Role } from "./role";

export class User {
    user_id: number;
    username: string;
    user_password: string;
    firstname: string;
    lastname: string;
    email: string;
    role_id?: Role;


    constructor(userId = 0, username = '', password = '', firstName = '', lastName = '', email = '', role = new Role()) {
        this.user_id = userId;
        this.username = username;
        this.user_password = password;
        this.firstname = firstName;
        this.lastname = lastName;
        this.email = email;
        this.role_id = role;
    }
}