// throw Error
function* generate () {
  try {
    yield 1
    yield 2
    yield 3
  } catch (e) {
    console.log(e.message) // Error on second step
  }
}

const iterator = generate()

console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.throw(Error('Error on second step'))) // { value: 2, done: true }
console.log(iterator.next()) // { value: undefined, done: true }
console.log(iterator.next()) // { value: undefined, done: true }