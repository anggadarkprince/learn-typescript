// OBJECT, ARRAY, TUPLE, ENUM, ANY

enum UserType {
    ADMIN = '01', CUSTOMER = 100, OWNER = '03'
}
const person: { // object types
    name: string,
    age: number,
    hobbies: Array<string>, // array types
    role: [number, string] // tuple types: fixed element length with exact type,
    type: UserType, // enum types
    description: any // any types
} = {
    name: "Angga",
    age: 28,
    hobbies: ['Sport', 'Coding'],
    role: [2, 'author'/*, 'additional' error */],
    type: UserType.CUSTOMER,
    description: "No description"
};
console.log(person);

//console.log(person.nickname); // cannot access unavailable key
console.log(person.name);
console.log(person.age);

for (const hobby of person.hobbies) {
    console.log(hobby);
}

// array types declaration
const favoriteActivities1: string[] = ['Programming', 'Reading'];
const favoriteActivities2: Array<string> = ['Programming', 'Reading'];
//const favoriteActivities2Nested: string[string[]] = [['Programming'], ['Reading']]; // error
const favoriteActivities2Nested: Array<Array<any>> = [['Programming'], [123]];
const favoriteActivities3: any = ['Programming', 'Reading'];
const favoriteActivities4: any = 'Coding';