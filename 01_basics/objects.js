const mySym = Symbol('key2')

const user = {
    name: 'sunny',
    id: 'key1',
    email: 'sunny@google.com',
    age: 24,
    [mySym]: 'key2',
}

console.log(user.email) // not a good way
console.log(user["email"]) // in square brackets are better option to get value.
console.log(user['age'])
console.log(user[mySym]) // no need for double or single qutation for symbol.