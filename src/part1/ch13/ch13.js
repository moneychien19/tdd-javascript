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
  plus(addend) {
    return new Sum(this, addend)
  }
}

class Bank {
  reduce(source, to) {
    const amount = source.augend._amount + source.addend._amount
    return new Money(amount, to)
  }
}

class Sum {
  constructor(augend, addend) {
    this.augend = augend
    this.addend = addend
  }
}

module.exports = { Money, Bank, Sum }
