import {expect, test} from '@oclif/test'

describe('tasks/new', () => {
  test
  .stdout()
  .command(['tasks/new'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['tasks/new', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
