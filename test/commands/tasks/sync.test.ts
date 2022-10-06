import {expect, test} from '@oclif/test'

describe('tasks/sync', () => {
  test
  .stdout()
  .command(['tasks/sync'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['tasks/sync', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
