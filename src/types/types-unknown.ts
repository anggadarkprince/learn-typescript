let userInput: unknown; // better than any because it can checked the actual type of the value (restricted)
let userName: string;

userInput = 5;
userInput = 'Angga'
//userName = userInput; // when userInput set to "any", no checking available
// userName = userInput; // when userInput set to "unknown", it's complain
if (typeof userInput === 'string') { // need this checking before it's used
    userName = userInput;
}