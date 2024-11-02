const user = {
    username: "sunny",
    price: 999,

     welcomeMessage: function() {
        console.log(`${this.username} , logged it`)
    }
}

// in browser "WINDOW" is a global object. and in node.js its an empty object.

user.welcomeMessage()

//-------------------------------arrow functions ----------------

const chai = (num1, num2) => {
    return num1 + num2
}


const chai1 = (num1, num2) => num1 + num2 // in single line code, no need of curlybrackets.

const chai2 = (num1, num2) => (num1 + num2)// in aprenthies no need to mention return word.

//immediately invoked function expression. called iife.
// need to wrap function in ( ) to avoid globle polution.

console.log(chai(2, 3))