class Department {
    public id: string = '';
    private name: string;
    age: number = 0; // public by default

    constructor(name: string) {
        this.name = name;
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
        return (new Date()).getTime() + '-' + this.name;
    }
}

const department = new Department('Operation');
console.log(department.getName())
console.log(department.age)
//console.log(department.generateId())