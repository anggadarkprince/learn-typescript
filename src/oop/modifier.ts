class Company {
    name: string;
    private employees: string[];

    constructor(name: string) {
        this.name = name;
        this.employees = [];
    }

    public addEmployee(name: string | string[]) {
        if (typeof name == "string") {
            this.employees.push(name)
        } else {
            this.employees = name;
        }
    }

    public getEmployees() {
        return this.employees;
    }

    // public by default
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

const company = new Company('PT Sejahtera');
company.addEmployee("Angga");
company.addEmployee("Ari");
company.addEmployee("Wijaya");
company.printEmployeeInformation();

const companyEmployees = company.getEmployees();
companyEmployees.push('Keenan')
companyEmployees.push('Evander')
company.addEmployee(companyEmployees);
company.printEmployeeInformation();