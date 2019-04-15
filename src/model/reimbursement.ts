export class RevReim {
    author = 0;
    amount = 0;
    date_submitted = 0;
    date_resolved = 0;
    description = '';
    status_id = 0;
    type_id = 0;
}
export class Reim {
    reimbursementId: number; // primary key
    author: number;  // foreign key -> User
    amount: number;
    dateSubmitted: number;
    dateResolved: number;
    description: string;
    resolver: number; // foreign key -> User
    status: number; // foreign ey -> ReimbursementStatus, not null
    type: number; // foreign key -> ReimbursementType

    constructor(reimbursementId = 0, author = 0, amount = 0, datasubmitted = 0, dateResolved = 0, description = '', resolver = 0, status = 0, type = 0) {
        this.reimbursementId = reimbursementId;
        this.author = author;
        this.amount = amount;
        this.dateSubmitted = this.dateSubmitted;
        this.dateResolved = dateResolved;
        this.description = description;
        this.resolver = resolver;
        this.status = status;
        this.type = type;
    }
}