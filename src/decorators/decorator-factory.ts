function Logger(logString: string) {
    console.log('Write log');
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        const obj = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = obj.name;
        }
    }
}

@Logger('Logging person')
@WithTemplate('<h1>My person object</h1>', 'app')
class SinglePerson {
    name = 'Angga';

    constructor() {
        console.log('Creating person object');
    }
}

const person2 = new SinglePerson();

console.log(person2);
