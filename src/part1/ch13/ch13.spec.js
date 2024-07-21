const { Money, Bank } = require('./ch13')

describe('Money', () => {
  it('test equality between Franc and Dollar', () => {
    expect(Money.dollar(5).equals(Money.franc(5))).toBe(false)
  })
  it('test currency is correct', () => {
    expect(Money.dollar(1).currency()).toBe('USD')
    expect(Money.franc(1).currency()).toBe('CHF')
  })
  describe('test times', () => {
    it('USD', () => {
      const five = Money.dollar(5)
      expect(Money.dollar(10).equals(five.times(2))).toBe(true)
      expect(Money.dollar(15).equals(five.times(3))).toBe(true)
    })
    it('CHF', () => {
      const five = Money.franc(5)
      expect(Money.franc(10).equals(five.times(2))).toBe(true)
      expect(Money.franc(15).equals(five.times(3))).toBe(true)
    })
  })
  describe('test plus', () => {
    it('USD, plus returns Sum', () => {
      const five = Money.dollar(5)
      const sum = five.plus(five)
      expect(five).toEqual(sum.augend)
      expect(five).toEqual(sum.addend)
    })
    it('USD, reduce sum', () => {
      const five = Money.dollar(5)
      const sum = five.plus(five)
      const bank = new Bank()
      const reduced = bank.reduce(sum, 'USD')
      expect(Money.dollar(10).equals(reduced)).toBe(true)
    })
  })
})
