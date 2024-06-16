class Franc {
  #amount
  constructor(amount) {
    this.#amount = amount
  }
  times(multiplier) {
    return new Franc(this.#amount * multiplier)
  }
  equals(dollar) {
    return this.#amount === dollar.#amount
  }
}
  
module.exports = { Franc }
  