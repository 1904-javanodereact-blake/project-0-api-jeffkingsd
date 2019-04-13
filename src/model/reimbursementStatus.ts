export class Reimbursementstatus {
  statusId: number; // primary key
  status: string;  // unique
    constructor(statusId = 0, status = '') {
      this.statusId = statusId;
      this.status = status;
    }
}