const { Dollar } = require('./ch03')

describe('Dollar', () => {
  it('test equality between Dollars', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
  })
  it('test inequality between Dollars', () => {
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
  })
})
