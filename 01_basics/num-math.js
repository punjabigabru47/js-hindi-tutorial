const balance = new Number(1000)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const othernum =  1000000
console.log(othernum.toLocaleString('en-IN'))

//--------------------------math-----------------------

console.log(Math.random()) // recieve random number

console.log((Math.random() * 10) + 1) // +1 is added to eleminate 0 figure.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min)) + min)