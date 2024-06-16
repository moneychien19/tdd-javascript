const { Dollar } = require('./ch04')

describe('Dollar', () => {
  it('test equality between Dollars', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
  })
  it('test inequality between Dollars', () => {
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
  })
  it('5 times 2 is 10, and times 3 is 15', () => {
    const five = new Dollar(5)
    expect(new Dollar(10).equals(five.times(2))).toBe(true)
    expect(new Dollar(15).equals(five.times(3))).toBe(true)
  })
})
