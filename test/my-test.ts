import {describe, it, should, before} from 'mocha'
import {expect} from 'chai'
import {add} from './index'
describe('add function', () => {
  it('should isEmptyArray', () => {
    const a = add()
    expect(a).to.equal(true)
  })
})
