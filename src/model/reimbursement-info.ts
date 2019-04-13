import { Reimbursement } from './reimbursement';
import { Reimbursementstatus } from './Reimbursementstatus';
import { Reimbursementtype } from './Reimbursementtype';

export let Reimbursements: Reimbursement[] = [
new Reimbursement(1, 1, 300, 482015, 4122015, 'Travel business meeting', 80, 1, 2)

];

export let Reimbursementstatuses: Reimbursementstatus[] = [
new Reimbursementstatus(1, 'Approved'),
new Reimbursementstatus(0, 'Denied'),
new Reimbursementstatus(2, 'Pending'),
];

export let Reimbursementtypes: Reimbursementtype[] = [
new Reimbursementtype(1, 'Travel'),
new Reimbursementtype(2, 'Food'),
new Reimbursementtype(3, 'Lodging'),
new Reimbursementtype(4, 'other'),
];