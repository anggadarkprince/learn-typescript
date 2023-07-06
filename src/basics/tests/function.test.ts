describe('Function', function () {
    it('should support function', function () {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }
        expect(sayHello('Ari')).toBe('Hello Ari');

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }
        printHello('Ari');
    });

    it('should support default value', function() {
        function sayHello(name: string = 'guest'): string {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe('Hello guest');
    });

    it('should support rest parameter', function() {
        function sum(...values: number[]): number {
            let total = 0;
            for(const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3)).toBe(6);
    });

    it('should support optional parameter', function() {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            return `Hello ${firstName}`;
        }
        expect(sayHello('Angga')).toBe('Hello Angga');
        expect(sayHello('Angga', 'Ari')).toBe('Hello Angga Ari');
    });

    it('should support function overloading', function() {
        function callMe(value: number): number;
        function callMe(value: string): string;

        function callMe(value: any): any {
            if (typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value * 10;
            }
        }

        expect(callMe(10)).toBe(100);
        expect(callMe('angga')).toBe('ANGGA');
    });

    it('should support function parameter', function() {
        function sayHello(value: string, filter: (value: string) => string) {
            return `Hello ${filter(value)}`;
        }

        const newName = sayHello('Angga', (name: string) => {
            return name.split('').join('-');
        });

        expect(newName).toBe('Hello A-n-g-g-a');
    })
})