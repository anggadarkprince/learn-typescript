import {sayHello} from "../src/say-hello";

describe('Hello', function() {
    it('should say hello', function() {
        const name = 'Hello Angga';
        expect(name).toBe('Hello Angga');
    });

    it('should return hello name', function() {
        expect(sayHello('Angga')).toBe('Hello Angga');
    })
})
