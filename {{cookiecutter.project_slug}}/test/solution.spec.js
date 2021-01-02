import { expect } from 'chai'
import { describe, it } from 'mocha'

import { Solution } from '../src/solution'

describe('Solution', () => {
  describe('.solution', () => {
    const dataTable = [
      { input: 1, expected: 1 },
    ]

    // Items to check as needed:
    // Check efficiency as required
    // Maximum
    // Minimum
    // Odd
    // Even
    // Negative numbers
    // Load Test

    for (let i = 0; i < dataTable.length; i += 1) {
      describe(`when given ${dataTable[i].input}`, () => {
        it('passes', () => {
          expect(Solution.solution(dataTable[i].input)).to.eq(
            expectedData[i].expected
          )
        })
      })
    }
  })
})
