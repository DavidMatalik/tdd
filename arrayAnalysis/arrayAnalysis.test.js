import analyze from './arrayAnalysis'

it('Has right average value', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toHaveProperty('average', 4)
})

it('Has right min value', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toHaveProperty('min', 1)
})

it('Has right max value', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toHaveProperty('max', 8)
})

it('Has right length value', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toHaveProperty('length', 6)
})
