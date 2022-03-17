// dynamic property
interface ErrorContainer {
    // only string and number only as property name or index
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    1: 'Error'
}

console.log(errorBag);