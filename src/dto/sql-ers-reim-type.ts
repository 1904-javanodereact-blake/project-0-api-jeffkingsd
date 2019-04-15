export class SqlReimType {
    type_id = 0;
    type = '';
}
export class RevSqlReimType {
    type_id: number;
    type: string;

        constructor(type_id = 0, type = '') {
            this.type_id = type_id;
            this.type = type;
        }
}