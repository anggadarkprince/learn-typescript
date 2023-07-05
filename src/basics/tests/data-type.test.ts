describe('Data Type', function() {
    it('should primitive declare', function() {
        const name: string = "Angga Ari Wijaya";
        const balance: number = 100;
        const isPremium: boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isPremium);
    });

    it('should array declared', function() {
        // typed array
        const names: string[] = ["Angga", "Ari", "Wijaya"];
        const balances: Array<number> = [100, 20, 80];

        // readonly, cannot override
        const todos: Readonly<string[]> = ["Work", "Play", "Sleep"];
        // or const todos: ReadonlyArray<string[]> = ["Work", "Play", "Sleep"];

        // tuple: length defined with specific type
        const person: readonly [string, string, number] = ["Angga", "Ari", 30];

        console.info(names);
        console.info(balances);
        console.info(todos);
        //todos[0] = "Go home"; // cannot change readonly array
        console.info(person);
    });

    it('should contains any type', function() {
        const person: any = {
            id: 1,
            name: 'Angga Ari',
            age: 30,
        };

        person.age = '31';
        person.address = 'Surabaya';

        console.info(person);
    });

    it('should support union', function() {
        let sample: number | string | boolean = 'Angga';
        console.info(sample);

        sample = 100;
        console.info(sample);

        // sample = []; error not in union type

        function process(value: number | string | boolean) {
            if (typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process('Angga')).toBe('ANGGA');
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });

    it('should support alias', function() {

    })
})
