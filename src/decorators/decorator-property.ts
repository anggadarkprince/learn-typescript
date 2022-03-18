function LogProperty(target: any, propertyName: string | Symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}

function LogAccessor(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target, name, descriptor);
}

function LogMethod(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target, name, descriptor);
}

function LogParam(target: any, name: string | Symbol, position: number) {
    console.log('Param decorator');
    console.log(target, name, position);
}

class ProductItem {
    @LogProperty
    title: string;
    private _price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @LogAccessor
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price should be positive')
        }
    }

    @LogMethod
    getPriceWithTax(@LogParam tax: number) {
        return this._price * (1 + tax);
    }
}

const prod1 = new ProductItem('Coffee', 10000);