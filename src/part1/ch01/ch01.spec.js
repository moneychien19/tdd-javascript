const { Dollar } = require('./ch01')

describe('Dollar', () => {
  it('5 times 2 is 10', () => {
    const five = new Dollar(5)
    five.times(2)
    expect(five.amount).toBe(10)
  })
})
