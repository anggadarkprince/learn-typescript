import {Category, Product} from "../src/type-alias";

describe('Type Alias', function() {
    it('should support alias', function() {
        const category: Category = {
            id: '1',
            category: 'Computer'
        };

        const product: Product = {
            id: 1,
            name: 'Macbook Pro',
            price: 21000000,
            category: category
        }

        console.info(category);
        console.info(product);
    });

    it('should support object type alias', function() {
        const person: {id: string, name: string, description?: string} = {
            id: 'id',
            name: 'Angga'
        };

        console.info(person);
    })
})
