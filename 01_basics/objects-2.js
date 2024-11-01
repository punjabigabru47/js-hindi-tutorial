const users = {
    id: 5,
    sex: 'male',
    email: 'some@google.com',
    username: {
        fullname: {
            name: 'sunny',
            surname: 'singh',
        }
        
    },
}

console.log(users.username.fullname.name);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd' }

const obj3 = Object.assign({}, obj1, obj2) // objects.assign is used to combine two objects.
//or one more way to do this

const obj4 = {...obj1, ...obj2} // both return same value.
console.log(obj3)

//  json is also an object in api. in objects they have names but in json they dont have
// names thats why in json keys are also in double " " and values as well.