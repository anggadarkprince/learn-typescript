// never is never return any value, but exit of throw exception, void is value, then still be returned
function generateError(message: string, code: number): never {
    throw {
        message: message,
        code: code,
    }
}

const results = generateError('An error occurred!', 500)
console.log(results)