// interface describe custom type structure
interface Enemy {
    //name: string = 'Giant Bugs'; // can't have an initializer
    readonly name: string;
    ammo: number;
    life?: number; // optional

    attack(usedAmmo?: number): void;
}

interface HasShield {
    defend(): void
}

let giantBugs: Enemy;
giantBugs = {
    name: 'Giant Crazy Bugs',
    ammo: 500,
    //life: 100, // because optional
    attack(usedAmmo: number) {
        this.ammo -= usedAmmo;
    }
}
console.log(giantBugs);

// interface with classes
class RedMonster implements Enemy {
    name: string;
    ammo: number;
    life = 150;
    burstAttack: boolean = true;

    constructor(name: string) {
        this.name = name;
        this.ammo = 1000;
    }

    attack(usedAmmo?: number): void {
        if (!usedAmmo) {
            usedAmmo = 1;
        }
        if (this.ammo > 0) {
            if (this.burstAttack) {
                if (Math.random() > 0.5) {
                    this.ammo -= usedAmmo * 2;
                }
            }
        } else {
            throw new Error("Empty ammunition");
        }
    }
}

class GreenSnake implements Enemy, HasShield {
    readonly name = 'Green Snake';
    ammo = 1000;
    life = 100;
    hasInfinityAmmo = true;

    attack(usedAmmo: number = 1) { // use default value in concrete class
        if (!this.hasInfinityAmmo) {
            this.ammo -= usedAmmo;
        }
    }

    defend(): void {
        this.life += (0.2 * this.life);
    }

    set poison(isPoisoned: boolean) {
        this.hasInfinityAmmo = isPoisoned;
    }

    get isFragile() {
        return this.ammo <= 0;
    }
}

const monster1 = new RedMonster("Giant Monster");
monster1.attack();
monster1.attack(20);

const snake1 = new GreenSnake();
snake1.attack(20);


// interface with functions
//type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let addTwoNumber: AddFn;

addTwoNumber = (n1: number, n2: number) => {
    return n1 + n2;
}

