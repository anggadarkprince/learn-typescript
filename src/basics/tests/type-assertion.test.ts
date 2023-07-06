import {Person} from "../src/person";

describe('Type Assertion', function() {
    it('should support type assertion', function() {
        const person: any = {
            name: 'Angga',
            age: 30,
        }
        const person2: Person = person as Person;
        //person2.sayHello('Ari'); // error
        console.info(person2);
    });
})