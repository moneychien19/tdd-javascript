const { Money, Dollar, Franc } = require('./ch07')

describe('Money', () => {
  it('test equality between Franc and Dollar', () => {
    expect(new Franc(5).equals(new Dollar(5))).toBe(false)
  })
})
