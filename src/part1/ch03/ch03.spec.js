const { Dollar } = require('./ch03')

describe('Dollar', () => {
  it('test equality between Dollars', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
  })
  it('test inequality between Dollars', () => {
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
  })
  it('5 times 2 is 10, and times 3 is 15', () => {
    const five = new Dollar(5)
    let product = five.times(2)
    expect(product.amount).toBe(10)
    product = five.times(3)
    expect(product.amount).toBe(15)
  })
})
