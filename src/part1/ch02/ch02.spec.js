const { Dollar } = require('./ch02')

describe('Dollar', () => {
  it('5 times 2 is 10, and times 3 is 15', () => {
    const five = new Dollar(5)
    let product = five.times(2)
    expect(product.amount).toBe(10)
    product = five.times(3)
    expect(product.amount).toBe(15)
  })
})
