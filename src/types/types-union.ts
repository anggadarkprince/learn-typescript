type Combinable = number | string; // custom type

function combineVal(n1: Combinable, n2: number | string, parse: 'as-number' | 'as-text' = 'as-text') {
    if (typeof n1 === 'number' && typeof n2 === 'number' || parse == 'as-number') {
        return +n1 + +n2;
    }
    return n1.toString().concat(n2.toString())
}

console.log(combineVal(20, 25))
console.log(combineVal('20', '25', 'as-number'))
console.log(combineVal('20', '25', 'as-text'))
console.log(combineVal('Angga', 'Ari'))