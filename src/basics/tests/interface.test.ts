import {Seller} from "../src/seller";
import {Employee, Manager} from "../src/employee";
import {Person} from "../src/person";

describe('Interface', function() {
    it('should support interface', function() {
        const seller: Seller = {
            id: 1,
            name: 'Angga',
            taxNumber: '0001222'
        }
        seller.name = 'Ari';
        //seller.taxNumber = '22203'; // readonly

        console.info(seller);
    });

    it('should support function interface', function() {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(1, 2)).toBe(3);
    });

    it('should support indexable interface', function() {
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ['Angga', 'Ari'];
        console.info(names);
    });

    it('should support indexable interface for non number index', function() {
        interface StringDictionary {
            [index: string]: string
        }

        const dictionary: StringDictionary = {
            name: 'Angga',
            location: 'Indonesia',
        };
        console.info(dictionary);
    });

    it('should support extend interface', function() {
        const employee: Employee = {
            id: '1',
            name: 'Angga',
            division: 'IT',
        }
        console.info(employee);
        const manager: Manager = {
            id: '1',
            name: 'Angga',
            division: 'IT',
            totalSubordinate: 10,
        }
        console.info(manager);
    });

    it('should support function in object', function() {
        const person: Person = {
            name: 'Angga',
            sayHello(name: string): string {
                return `Hello ${name}, my name ${this.name}`;
            }
        }
        console.log(person.sayHello('Ari'));
    });

    it('should support intersection type', function() {
        interface HasName {
            name: string;
        }
        interface HasId {
            id: string;
        }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id: '1',
            name: 'Angga'
        }
        console.log(domain);
    });
})