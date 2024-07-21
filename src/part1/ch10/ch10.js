class Money {
  _amount
  _currency
  constructor(amount, currency) {
    this._amount = amount
    this._currency = currency
  }
  static dollar(amount) {
    return new Dollar(amount, 'USD')
  }
  static franc(amount) {
    return new Franc(amount, 'CHF')
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

class Dollar extends Money {
  constructor(amount, currency) {
    super(amount, currency)
  }
}

class Franc extends Money {
  constructor(amount, currency) {
    super(amount, currency)
  }
}

module.exports = { Money, Dollar, Franc }
