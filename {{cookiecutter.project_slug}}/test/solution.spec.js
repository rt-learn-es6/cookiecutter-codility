import { expect } from 'chai'
import { describe, it } from 'mocha'

import { Solution } from '../src/solution'

describe('Solution', () => {
  describe('.solution', () => {
    const inputData = []
    const expectedData = []

    for (let i = 0; i < inputData.length; i += 1) {
      describe(`when given ${inputData[i]}`, () => {
        it('passes', () => {
          expect(Solution.solution()).to.eq(expectedData[i])
        })
      })
    }
  })
})
