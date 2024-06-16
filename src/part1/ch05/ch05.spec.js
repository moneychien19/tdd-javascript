const { Franc } = require('./ch05')

describe('Franc', () => {
  it('5 times 2 is 10, and times 3 is 15', () => {
    const five = new Franc(5)
    expect(new Franc(10).equals(five.times(2))).toBe(true)
    expect(new Franc(15).equals(five.times(3))).toBe(true)
  })
})
