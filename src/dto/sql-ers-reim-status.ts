export class SqlReimStatus {
    status_id = 0;
    status = '';
}
export class RevSqlReimStatus {
    status_id: number;
    status: string;

    constructor(status_id = 0, status = '') {
        this.status_id = status_id;
        this.status = status;
    }
}