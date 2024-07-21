class Money {
  _amount
  _currency
  constructor(amount, currency) {
    this._amount = amount
    this._currency = currency
  }
  static dollar(amount) {
    return new Money(amount, 'USD')
  }
  static franc(amount) {
    return new Money(amount, 'CHF')
  }
  equals(money) {
    return (
      this._amount === money._amount &&
      this._currency === money._currency
    )
  }
  currency() {
    return this._currency
  }
  times(multiplier) {
    return new Money(this._amount * multiplier, this._currency)
  }
}

module.exports = { Money }
