const myarr = new Array(1,2,3,4,5)
console.log(myarr[1])

// methods

myarr.push(6) // will push 6 into array at last 
myarr.pop()  // will remove last element of the an array
myarr.unshift(7) // it will add element at the begening of the array.
myarr.shift() // will remove the first element of an array.




// slice and splice

const mna1 = myarr.slice(1,3) // returns a section of array but dont manuplate original array
const mna2 = myarr.splice(1,3) // it manuplate an array, it includes 3 as well
console.log(myarr)
console.log(mna1)
console.log(mna2)
console.log(myarr)

const brothers = ['sunny', 'rinku', 'sonu']
const cousin = ['bisky', 'kala', 'jipsy']

const allBros = [...brothers, ...cousin] // spread opreator is better to combine multiple array

console.log(allBros)
//.from() method turn a string into an array 
//Array.of() also combine multiple variables or values into one array.
console.log(Array.from("sunny"))