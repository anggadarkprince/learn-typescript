// -------------------------------------------
// let and const
const username = 'anggadarkprince';
//username = 'angga.aw';
let age = 30;
age = 29;

// var available in global and function scope
// let has same behaviour as var but with additional if, switch, loop and any other scope
function add(a: number, b: number) {
    var result = a + b;
    return result;
}

add(1, 2);
//console.log(result);


if(age > 19) {
    var success = true;
}
//console.log(success); // in vanilla javascript will print "true", but when we use let it will fail
// in typescript var will treat like let, so this is fail as well

// -------------------------------------------
// arrow function & default parameter
const addNumber = (a: number, b: number = 0) => a + b;
const subNumber = (a: number) => {
    const result = a - 1;
    return result;
}
const printOutput: (a: number | string) => void = output => console.log(output);
const printOutput2: (a: number | string) => void = (output = 0) => console.log(output);


// -------------------------------------------
// spread operator
const hobbies: string[] = ['Sports', 'Cookie'];
console.log(hobbies);
const activeHobbies = ['Basket'];
activeHobbies.push(...hobbies); // pull out the values -> activeHobbies.push('Sport', 'Cookie')
console.log(activeHobbies)

const Person: object = {
    name: 'Angga',
    age: 30
}
const newPerson: object = {...Person};
// @ts-ignore
newPerson.name = 'Ari';

console.log(Person); // will return same value because we copy the value not reference it


// -------------------------------------------
// rest operator
const addVal = (...nums: number[]) => {
    return nums.reduce((acc, current) => {
        return current + acc;
    }, 0)
}
const addedNumbers = addVal(5, 10, 2, 4, 3);
console.log(addedNumbers);

const [hobby1, ...remainingHobbies] = hobbies;
console.log(remainingHobbies, hobby1);


const User = {
    email: 'angga@mail.com',
    id: '352523',
    nickname: 'angga.ari'
}
const {
    email: emailAddress,
    nickname
} = User;

console.log(emailAddress, nickname)