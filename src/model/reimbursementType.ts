export class RevReimType  {
  type_id = 0;
  type = '';
}

export class Reimbursementtype {
  typeId: number; // primary key
  type: string;
    constructor(typeId = 0, type = '') {
        this.typeId = typeId;
        this.type = type;
    }
}

// Possible types are Lodging, Travel, Food or other