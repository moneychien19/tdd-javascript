const { Dollar } = require('./ch04')

describe('Dollar', () => {
  it('5 times 2 is 10, and times 3 is 15', () => {
    const five = new Dollar(5)
    expect(new Dollar(10).equals(five.times(2))).toBe(true)
    expect(new Dollar(15).equals(five.times(3))).toBe(true)
  })
})
