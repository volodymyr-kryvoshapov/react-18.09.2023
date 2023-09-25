// const user = {
//   name: 'John',
//   age: 30,
//   isAdmin: true,
//   phone: '123-456-7890',
//   address: {
//     city: 'New York',
//     street: 'Broadway'
//   }
// }

// const city = user.address.city
// const name = user.name

// Destructurization
// const {} = user;
// const { name, phone, address: { city } } = user

// console.log(name, city, phone)

// Array destructurization
// const user = ['John', 30, true, '123-456-7890']
// const name = user[0]
// const age = user[1]
// const phone = user[3]

// const [name, age, , phone] = user
// const [name, age, ...rest] = user
// console.log(name, age, rest)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const numbers2 = [10, 11, 12, 13, 14, 15]
//
// const mergedArrays = [...numbers, ...numbers2]
//
// console.log(mergedArrays)


// const user = {
//   name: 'John',
//   age: 30,
//   isAdmin: true,
//   phone: '123-456-7890',
//   address: {
//     city: 'New York',
//     street: 'Broadway'
//   }
// }
//
// function sayHi ({ name, age, ...rest }) {
//   console.log(`Hi, ${name}!`)
// }
//
// if (user) {
//   console.log(sayHi(user))
// }

const user = {
  name: 'John',
  age: 30,
}

const additionalUserFields = {
  name: 'John Doe',
  isAdmin: true,
  phone: '123-456-7890',
}

const mergedUser = { ...user, ...additionalUserFields }

console.log(mergedUser)