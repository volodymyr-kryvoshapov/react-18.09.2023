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

// console.log(name, age, phone)




const user = {
  name: 'John',
  age: 30,
  isAdmin: true,
  phone: '123-456-7890',
  address: {
    city: 'New York',
    street: 'Broadway'
  }
}

function sayHi ({ name }) {
  console.log(`Hi, ${name}!`)
}

if (user) {
  console.log(sayHi(user))
}
