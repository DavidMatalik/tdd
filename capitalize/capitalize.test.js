import { TestScheduler } from '@jest/core'
import capitalize from './capitalize'

test('Make first character uppercase', () => {
  expect(capitalize('hello')).toBe('Hello')
})

it('Make all characters lowercase except first', () => {
  expect(capitalize('hELlo')).toBe('Hello')
})
