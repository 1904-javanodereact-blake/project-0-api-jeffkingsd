import { RevReimType } from '../model/reimbursementType';
import { RevSqlReimType } from '../dto/sql-ers-reim-type';
import { RevReimStatus } from '../model/ReimbursementStatus';
import { RevSqlReimStatus } from '../dto/sql-ers-reim-status';
import { RevReim } from '../model/reimbursement';
import { RevSqlReim } from '../dto/sql-ers-reim';

// Function for reverse converting ReimType server format into SQL format
export function convertSqlReimType(revRT: RevReimType) {
    return new RevSqlReimType(revRT.type_id, revRT.type);
}

// Function for converting ReimStatus server format into SQL format
export function convertSqlReimStatus(revST: RevReimStatus) {
    return new RevSqlReimStatus(revST.status_id, revST.status);
}

// Function for reverse converting Reim server format into SQL format
export function convertSqlReim(revReim: RevReim) {
    return new RevSqlReim(revReim.date_submitted, revReim.date_resolved, revReim.status_id, revReim.type_id);
}

// Function to grab specific word from array elemnt to match and change to SQL format.
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