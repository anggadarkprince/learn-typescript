function Loggers(constructor: Function) {
    console.log('Logging');
    console.log(constructor);
}

@Loggers
class SinglePersons {
    name = 'Angga';

    constructor() {
        console.log('Creating person object');
    }
}

const person1 = new SinglePersons();

console.log(person1);

// decorator runs when class defined (property, class, parameter decorators) to make additional setup