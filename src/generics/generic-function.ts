type Named = {
    name: string
}

// generic function with constraint (extends)
function merge<T extends Named, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string }, { age: number }>({name: 'Angga'}, {age: 29});
console.log(mergedObj.age);
console.log(mergedObj.name);


// another example function with generic
interface HasLength {
    length: number
}
function countAndPrint<T extends HasLength>(element: T) {
    let descriptionText = 'No value';
    if (element.length > 0) {
        descriptionText = 'Element length: ' + element.length
    }
    return [element, descriptionText];
}

console.log(countAndPrint('Hi there'));
console.log(countAndPrint(['Sport', 'Cooking']));
//console.log(countAndPrint(234)); // error because doesn't have length properties


// keyof tell typescript to check if generic key of variable
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Angga'}, 'name'));