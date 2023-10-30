// return middle data
function* generate () {
  yield 1
  yield 2
  yield 3
}

const iterator = generate()

console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.return()) // { value: 2, done: true }
console.log(iterator.next()) // { value: undefined, done: true }
console.log(iterator.next()) // { value: undefined, done: true }