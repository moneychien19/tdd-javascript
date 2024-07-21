class Money {
  _amount
  constructor(amount) {
    this._amount = amount
  }
  static dollar(amount) {
    return new Dollar(amount)
  }
  static franc(amount) {
    return new Franc(amount)
  }
  equals(money) {
    return (
      this._amount === money._amount &&
      this.constructor.name === money.constructor.name
    )
  }
}

class Dollar extends Money {
  constructor(amount) {
    super(amount)
  }
  times(multiplier) {
    return new Dollar(this._amount * multiplier)
  }
}

class Franc extends Money {
  constructor(amount) {
    super(amount)
  }
  times(multiplier) {
    return new Franc(this._amount * multiplier)
  }
}

module.exports = { Money, Dollar, Franc }
