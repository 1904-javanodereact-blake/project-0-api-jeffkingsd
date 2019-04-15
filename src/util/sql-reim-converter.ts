import { RevReimType } from '../model/Reimbursementtype';
import { RevSqlReimType } from '../dto/sql-ers-reim-type';
import { RevReimStatus } from '../model/Reimbursementstatus';
import { RevSqlReimStatus } from '../dto/sql-ers-reim-status';
import { RevReim } from '../model/reimbursement';
import { RevSqlReim } from '../dto/sql-ers-reim';

export function convertSqlReimType(revRT: RevReimType) {
    return new RevSqlReimType(revRT.type_id, revRT.type);
}
export function convertSqlReimStatus(revST: RevReimStatus) {
    return new RevSqlReimStatus(revST.status_id, revST.status);
}
export function convertSqlReim(revReim: RevReim) {
    return new RevSqlReim(revReim.date_submitted, revReim.date_resolved, revReim.status_id, revReim.type_id);
}
export function numberReim( Reimarr: string[] ) {
    for (let i = 0; i < Reimarr.length; i++) {
            const word = Reimarr[i];
            if (word === 'reimId') {
                    Reimarr[i] = 'reimbursement_id';
            } else if (word === 'dateResolved') {
                    Reimarr[i] = 'date_resolved';
            } else if (word === 'typeId') {
                    Reimarr[i] = 'type_id';
            }
        }
    return Reimarr;
}