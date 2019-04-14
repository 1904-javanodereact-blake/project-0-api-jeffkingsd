export class SqlERSuser {
    user_id = 0;
    username = '';
    user_password = '';
    firstname = '';
    lastname = '';
    email = '';
    role = '';
}
export class RevSqlERSuser {
    user_id: number;
    username: string;
    user_password: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;

        constructor(user_id = 0, username = '', user_password = '', firstname = '', lastname = '', email = '', role = '') {
            this.user_id = user_id;
            this.user_password = user_password;
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.role = role;
        }
}