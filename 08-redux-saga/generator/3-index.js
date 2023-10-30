// return value from generator
function* generate () {
  console.log('First step')
  const res = (yield) * 2

  return res
}

// generate() // nothing happens

const iterator = generate()

console.log(iterator.next()) // { value: undefined, done: false }
console.log(iterator.next(8)) // { value: 16, done: true }