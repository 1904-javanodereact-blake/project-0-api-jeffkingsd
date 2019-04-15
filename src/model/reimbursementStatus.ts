export class RevReimStatus {
  status_id = 0;
  status = '';
}

export class Reimbursementstatus {
  statusId: number; // primary key
  status: string;  // unique
    constructor(statusId = 0, status = '') {
      this.statusId = statusId;
      this.status = status;
    }
}