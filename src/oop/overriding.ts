import Department from './class';

class ITDepartments extends Department {
    constructor(manager: string, public admins: string[]) {
        super("IT");
        this.setManager(manager);
        //this.manager = manager; // can access because protected
    }

    // override the function
    protected setManager(manager: string) {
        if (manager !== '') {
            this.manager = manager;
        } else {
            throw new Error("Manager should be set");
        }
    }
}

const it = new ITDepartments("Angga", ["ari", "wijaya"]);
it.age = 4;
console.log(it);
