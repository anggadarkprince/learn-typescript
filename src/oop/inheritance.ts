import Department from './class';

class AccountingDepartment extends Department {
    members: string[];

    constructor(members: string[]) {
        super("Accounting");
        this.members = members;
    }
}

class ITDepartment extends Department {
    constructor(public admins: string[]) {
        super("IT");
    }
}

const it = new ITDepartment(["angga", "ari", "wijaya"]);
it.age = 4;
console.log(it);

const accounting = new AccountingDepartment(["keenan", "evander"]);
console.log(accounting);
