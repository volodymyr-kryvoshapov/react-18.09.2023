function* generate () {
  console.log('First step')
  yield
  console.log('Second step')
}

generate() // nothing happens

const iterator = generate()

iterator.next() // { value: undefined, done: false }
iterator.next() // { value: undefined, done: true }