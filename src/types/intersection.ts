type Admin = {
    name: string;
    privileges: string[];
}

interface Employee { // can be type or interface
    name: string;
    startDate: Date
}

type ElevatedEmployee = Admin & Employee;

const emp1: ElevatedEmployee = {
    name: 'Angga Ari',
    privileges: ['create-article', 'view-article'],
    startDate: new Date()
}


// working with interface
interface Admins {
    name: string;
    privileges: string[];
}

interface Employees {
    name: string;
    startDate: Date
}

interface ElevatedEmployees extends Admins, Employees {

}

const emp2: ElevatedEmployees = {
    name: 'Angga Ari',
    privileges: ['create-article', 'view-article'],
    startDate: new Date()
}
