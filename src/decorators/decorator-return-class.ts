function WithTemplates(template: string, hookId: string) {
    return function<T extends {new(...args: any[]): {name: string}}> (originConstructor: T) {
        // return new class to replace old one (will executed when class instantiated)
        return class extends originConstructor {
            constructor(..._: any[]) {
                super();

                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

@WithTemplates('<h1>My person object</h1>', 'app')
class OnePerson {
    name = 'Angga';

    constructor() {
        console.log('Creating person object');
    }
}

const personOne = new OnePerson();

console.log(personOne);
