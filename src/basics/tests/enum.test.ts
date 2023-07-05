import {Customer, CustomerStatus, CustomerType} from "../src/enum";

describe('Enum', function() {
    it('should support enum', function() {
        const customer: Customer = {
            id: '1',
            name: 'Angga',
            type: CustomerType.PLATINUM,
            status: CustomerStatus.ACTIVE,
        };

        console.info(customer);
    });
})
