abstract class Animal {
    // if constructor is protected, then the child class must define
    // the constructor them self to interact with parent constructor
    protected constructor(public name: string) {
    }
    abstract sound(): string;
}


class Duck extends Animal {
    constructor(public duckName: string) {
        super(duckName);
    }
    sound(): string {
        return "Kwek kwek..";
    }
}

// abstract cannot be instantiated
//const animal = new Animal();

const duck = new Duck("Rubber Duck");
console.log(duck.sound());

