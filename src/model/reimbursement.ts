
export class Reimbursement {
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