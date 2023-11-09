import {isEmpty} from '../isEmpty'

describe('isEmpty', () => {
  describe('positive', () => {
    it('should return true if empty str provided', () => {
      expect(isEmpty('')).toBe(true)
    })

    it('should return true if null provided', () => {
      expect(isEmpty(null)).toBe(true)
    })

    it('should return true if undefined provided', () => {
      expect(isEmpty(undefined)).toBe(true)
    })
  })

  describe('negative', () => {
    it('should return false if number provided', () => {
      expect(isEmpty(1)).toBe(false)
      expect(isEmpty(1)).not.toBe(undefined)
    })
  })
})
