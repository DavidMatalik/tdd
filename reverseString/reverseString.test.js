import reverseString from './reverseString'

it('Reverse characters of a word', () => {
  expect(reverseString('hello')).toBe('olleh')
})

it('Reverse characters of a sentence', () => {
  expect(reverseString('hello my name is bob')).toBe('bob si eman ym olleh')
})
