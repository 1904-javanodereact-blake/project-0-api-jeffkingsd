import { User } from './user';
import { Role } from './role';

export let Users: User[] = [
    new User (1, 'potato', 'kiwi123', 'ire', 'Vangert', 'potatoland@gmail.com', new Role(3, 'User')),
    new User (2, 'stormtrooper20', 'lordvader4ever', 'Kevin', 'Soap', 'starwars8080@gmail.com', new Role(3, 'User')),
    new User (3, 'TurkySh0t', 'gravyturn', 'Bret', 'Stone', 'turkeyharvest@outlookmail.com', new Role(5, 'Finance Manager')),

];