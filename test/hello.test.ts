import { expect, test } from 'vitest'

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}

test('1+1+1', () => {
  expect(sum(1, 1, 1)).toEqual(3)
})

test('1+2+3', () => {
  expect(sum(1, 2, 3)).toEqual(6)
})

test('10 numbers', () => {
  expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(55)
})
