const { Money } = require('./ch09')

describe('Money', () => {
  it('test equality between Franc and Dollar', () => {
    expect(Money.dollar(5).equals(Money.franc(5))).toBe(false)
  })
  it('test currency is correct', () => {
    expect(Money.dollar(1).currency()).toBe('USD')
    expect(Money.franc(1).currency()).toBe('CHF')
  })
})

describe('Dollar', () => {
  it('5 times 2 is 10, and times 3 is 15', () => {
    const five = Money.dollar(5)
    expect(Money.dollar(10).equals(five.times(2))).toBe(true)
    expect(Money.dollar(15).equals(five.times(3))).toBe(true)
  })
})

describe('Franc', () => {
  it('5 times 2 is 10, and times 3 is 15', () => {
    const five = Money.franc(5)
    expect(Money.franc(10).equals(five.times(2))).toBe(true)
    expect(Money.franc(15).equals(five.times(3))).toBe(true)
  })
})