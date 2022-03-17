function combine(n1: number, n2: number) {
    return +n1 + +n2;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

const combineValues: Function = combine;
console.log(combineValues(20, 25))

addAndHandle(10, 20, (result) => {
    console.log(result)
})