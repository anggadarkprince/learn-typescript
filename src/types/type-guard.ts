// working with primitive type
type Textual = string | number;
type Numeric = number | boolean;
type Universal = Textual & Numeric;

// type guard
function plus(a: Textual, b: Textual) {
    // type guard to use union type
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInformation({name: 'Angga', startDate: new Date()})

class Car {
    drive() {
        console.log('Driving')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ' + amount)
    }
}

type Vehicle = Car | Truck;
function useVehicle(vehicle: Vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
    vehicle.drive();
}
useVehicle(new Truck());