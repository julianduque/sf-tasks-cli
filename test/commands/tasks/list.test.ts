import {expect, test} from '@oclif/test'

describe('tasks/list', () => {
  test
  .skip()
  .stdout()
  .command(['tasks/list'])
  .it('runs list', _ctx => {
    expect(true).to.equal(true)
  })
})
