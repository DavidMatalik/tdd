import ceasar from './ceasarCipher'

it('Shift of 1 works', () => {
  expect(ceasar('hello', 1)).toBe('ifmmp')
})

it('Shift of 3 works with same case', () => {
  expect(ceasar('HEllo', 3)).toBe('KHoor')
})

it('Shift of 72 works', () => {
  expect(ceasar('Hello', 72)).toBe('Byffi')
})

it('Shift of 3 works with punctuation', () => {
  expect(ceasar('Hello my name is Bob! What is your name?', 29)).toBe(
    'Khoor pb qdph lv Ere! Zkdw lv brxu qdph?'
  )
})
