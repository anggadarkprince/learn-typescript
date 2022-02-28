class Product {
    constructor(private id: string, public name: string) {
    }

    public getId() {
        return this.id
    }
}

const coffee = new Product('N01', 'Nescafeein')
console.log(coffee.name, coffee.getId())