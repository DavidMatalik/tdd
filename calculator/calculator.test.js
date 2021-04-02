import Calculator from './calculator'
const calc = new Calculator()

it('Adding works for integers', () => {
  expect(calc.add(2, 3)).toBe(5)
})

it('Adding works for decimals', () => {
  expect(calc.add(2.5, 1.7)).toBe(4.2)
})

it('Adding with Strings works', () => {
  expect(calc.add('5', '0')).toBe(5)
})

it('Subtracting works for integers', () => {
  expect(calc.subtract(5, 2)).toBe(3)
})

it('Subtracting works for decimals', () => {
  expect(calc.subtract(2.5, 1.7)).toBe(0.8)
})

it('Multiplying works for integers', () => {
  expect(calc.multiply(5, 2)).toBe(10)
})

it('Multiplying works for decimals', () => {
  expect(calc.multiply(0.5, 0.5)).toBe(0.25)
})

it('Dividing works for integers', () => {
  expect(calc.divide(6, 2)).toBe(3)
})

it('Dividing works for decimals', () => {
  expect(calc.divide(5, 2.5)).toBe(2)
})

it('Dividing through zero', () => {
  expect(calc.divide(5, 0)).toBe('Dividing through 0 is not allowed')
})
