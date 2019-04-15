export class SqlReim {
    status_id = 0;
    type_id = 0;
    date_submitted = 0;
    date_resolved = 0;
}

export class RevSqlReim {
    status_id: number;
    type_id: number;
    date_submitted: number;
    date_resolved: number;

    constructor(date_submitted = 0, date_resolved = 0, status_id = 0, type_id = 0) {
        this.status_id = status_id;
        this.type_id = type_id;
        this.date_submitted = date_submitted;
        this.date_resolved = date_resolved;
    }
}