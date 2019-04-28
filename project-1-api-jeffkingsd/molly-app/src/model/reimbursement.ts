export class Authorinfo {
    reimbursement_id: number;
    full_name: string;
    amount: number;
    date_submitted: string;
    date_resolved: string;
    description: string;
    resolver_name: string;
    status: string;
    type: string;

    constructor(reimbusementId = 0, fullname ='', amount = 0, dateSubmitted = ' ', dateResolved = '', description = '', resolver = '', statusId = '', typeId = ''){
        this.reimbursement_id = reimbusementId;
        this.full_name = fullname;
        this.amount = amount;
        this.date_submitted = dateSubmitted;
        this.date_resolved = dateResolved;
        this.description = description;
        this.resolver_name = resolver;
        this.status = statusId;
        this.type = typeId;
    }
}