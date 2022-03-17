// Core types: string, number, boolean, object, Array (dynamic), Tuple (fixed)

function add(n1: number, n2: number, showResult: boolean, note: string = '') {
    const result = n1 + n2;
    if (showResult) {
        console.log(note + ' ' + result);
    }
    return result;
}

let number1 = '5'; // auto assign string type (type inference)
//number1 = 4; // we can't set number because above assigned type as string
const number2: number = 2.8; // type assignment (specific)

const result = add(+number1, number2, true, `Result of ${number1} + ${number2}:`);
console.log(result)