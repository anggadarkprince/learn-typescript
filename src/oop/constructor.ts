class Persons {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    describe(this: Persons) {
        console.log(`Hello my name is ${this.name}`)
    }
}

const angga = new Persons('Angga');
angga.describe();

const anggaCopy = {name: 'ari', describe: angga.describe}
anggaCopy.describe();