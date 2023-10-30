// Iterator
const a = {
  next: function() { // 0 or 1 arguments
    return { value: 1, done: false }
  },
  return: function() {
    return { value: 2, done: true }
  },
  throw: function() {
    return { value: 3, done: true }
  }
}

// Iterable
const b = {
  [Symbol.iterator]: function() {
    return {
      next: function() {
        return { value: 1, done: false }
      },
      return: function() {
        return { value: 2, done: true }
      },
      throw: function() {
        return { value: 3, done: true }
      }
    }
  }
}

const generateRange = {
  start: 1,
  end: 5,
  [Symbol.iterator]: function() { // 0 arguments
    let value = this.start
    const end = this.end

    return {
      next: function() {
        return {
          value: value++,
          done: value > end + 1
        }
      }
    }
  },
}

// for (const value of generateRange) {
//   console.log(value)
// }

// Spread operator
console.log([...generateRange])

// Array, Map, WeekMap