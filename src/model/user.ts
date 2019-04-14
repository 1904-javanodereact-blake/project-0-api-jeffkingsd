import { Role } from './role';
export class RevUser {
  user_id = 0;
  username = '';
  user_password = '';
  firstname = '';
  lastname = '';
  email = '';
  role = '';
}
export class User {
  userId: number; // primary key
  username: string; // not null, unique
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;

    constructor(userId = 0, username = '', password = '', firstName = '', lastName = '', email = '', role = {role}) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
    }
}