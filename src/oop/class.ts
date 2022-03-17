class Department {
    public id: string = '';
    private name: string;
    age: number = 0; // public by default
    protected manager: string = '';

    constructor(name: string) {
        this.name = name;
        this.generateId();
    }

    public getName(): string {
        return this.name;
    }

    // public by default
    setName(name: string) {
        this.name = name;
        this.generateId();
    }

    private generateId() {
        return this.id = (new Date()).getTime() + '-' + this.name;
    }

    protected setManager(manager: string) {
        this.manager = manager;
    }
}

const department = new Department('Operation');
console.log(department.getName())
console.log(department.age)
//console.log(department.generateId())

export default Department;