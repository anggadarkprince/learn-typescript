class Reporter {
    private firstName: string;
    private lastName: string;
    protected age: number;

    constructor(firstName: string, lastName: string, age: number = 0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get name() {
        return this.firstName + ' ' + this.lastName;
    }

    set name(fullName: string)
    {
        const name = fullName.split(" ");
        const [fName, ...lName] = name;
        this.firstName = fName;
        this.lastName = lName.join(' ');
    }
}

const reporter1 = new Reporter("Angga", "Ari");
console.log(reporter1.name)
reporter1.name = "Keenan Evander Alastair"
console.log(reporter1.name)