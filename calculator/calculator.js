export default class Calculator {
  parseToIntegers(num1, num2) {
    this.num1 = parseFloat(num1)
    this.num2 = parseFloat(num2)
  }
  add(num1, num2) {
    this.parseToIntegers(num1, num2)
    return this.num1 + this.num2
  }
  subtract(num1, num2) {
    this.parseToIntegers(num1, num2)
    return this.num1 - this.num2
  }
  multiply(num1, num2) {
    this.parseToIntegers(num1, num2)
    return this.num1 * this.num2
  }
  divide(num1, num2) {
    this.parseToIntegers(num1, num2)
    if (this.num2 === 0) {
      return 'Dividing through 0 is not allowed'
    }
    return this.num1 / this.num2
  }
}
