import {expect, test} from '@oclif/test'

describe('tasks/list', () => {
  test
  .stdout()
  .command(['tasks/list'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['tasks/list', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
