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
      this.constructor.name === money.constructor.name
    )
  }
  currency() {
    return this._currency
  }
}

class Dollar extends Money {
  constructor(amount, currency) {
    super(amount, currency)
  }
  times(multiplier) {
    return Money.dollar(this._amount * multiplier)
  }
}

class Franc extends Money {
  constructor(amount, currency) {
    super(amount, currency)
  }
  times(multiplier) {
    return Money.franc(this._amount * multiplier)
  }
}

module.exports = { Money, Dollar, Franc }
